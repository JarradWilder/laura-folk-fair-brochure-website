/**
 * Deploy pipeline: updates gh-pages with dist/ and pushes to origin.
 * Runs automatically after npm run build when on main branch.
 * Can also be run manually: npm run deploy:gh-pages
 *
 * - Main branch: never touched (no checkout, no deletes). node_modules stays.
 * - gh-pages: only receives contents of dist/ (no node_modules; copy skips it).
 * Uses a temporary git worktree so the main repo is never modified.
 *
 * 1. Creates a temporary worktree for gh-pages
 * 2. Replaces worktree contents with dist/ only (node_modules/.git never copied)
 * 3. Commits, pushes, removes worktree
 */

import fs from 'fs'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distPath = path.join(root, 'dist')
const worktreePath = path.join(os.tmpdir(), `gh-pages-worktree-${Date.now()}`)

function run(cmd, opts = {}) {
  const merged = { cwd: opts.cwd || root, encoding: 'utf-8', ...opts }
  return execSync(cmd, merged)
}

function getCurrentBranch() {
  return run('git rev-parse --abbrev-ref HEAD').trim()
}

const IGNORE_COPY = new Set(['node_modules', '.git'])
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const name of fs.readdirSync(src)) {
    if (IGNORE_COPY.has(name)) continue
    const srcEntry = path.join(src, name)
    const destEntry = path.join(dest, name)
    const stat = fs.statSync(srcEntry)
    if (stat.isDirectory()) {
      copyDir(srcEntry, destEntry)
    } else {
      fs.copyFileSync(srcEntry, destEntry)
    }
  }
}

function rmDir(dir) {
  if (!fs.existsSync(dir)) return
  for (const name of fs.readdirSync(dir)) {
    const entry = path.join(dir, name)
    if (fs.statSync(entry).isDirectory()) {
      rmDir(entry)
    } else {
      fs.unlinkSync(entry)
    }
  }
  fs.rmdirSync(dir)
}

try {
  const branch = getCurrentBranch()
  if (branch !== 'main') {
    console.log(`On branch "${branch}". Skipping gh-pages deploy (only runs on main).`)
    process.exit(0)
  }

  if (!fs.existsSync(distPath)) {
    console.error('dist/ not found. Run npm run build first.')
    process.exit(1)
  }

  console.log('Updating gh-pages with latest build...')
  console.log('Creating temporary worktree for gh-pages...')
  run(`git worktree add "${worktreePath}" gh-pages`, { stdio: 'inherit' })

  try {
    console.log('Copying dist/ into worktree...')
    for (const name of fs.readdirSync(worktreePath)) {
      if (name === '.git') continue
      const entry = path.join(worktreePath, name)
      if (fs.statSync(entry).isDirectory()) {
        rmDir(entry)
      } else {
        fs.unlinkSync(entry)
      }
    }
    copyDir(distPath, worktreePath)

    console.log('Committing...')
    run('git add -A', { cwd: worktreePath, stdio: 'inherit' })
    try {
      run('git commit -m "Update with latest build"', { cwd: worktreePath, stdio: 'inherit' })
    } catch (_) {
      console.log('Nothing to commit (build unchanged).')
    }

    console.log('Pushing gh-pages to origin...')
    run('git push origin gh-pages', { cwd: worktreePath, stdio: 'inherit' })
  } finally {
    console.log('Removing worktree...')
    run(`git worktree remove --force "${worktreePath}"`, { stdio: 'inherit' })
  }
} catch (err) {
  if (fs.existsSync(worktreePath)) {
    try {
      run(`git worktree remove --force "${worktreePath}"`, { stdio: 'ignore' })
    } catch (_) {}
    rmDir(worktreePath)
  }
  throw err
}

console.log('Deploy complete. GitHub Pages will update shortly.')
