/**
 * Deploy pipeline: updates gh-pages with dist/ and pushes to origin.
 * Runs automatically after npm run build when on main branch.
 * Can also be run manually: npm run deploy:gh-pages
 *
 * 1. Copies dist/ to a temp folder
 * 2. Checks out gh-pages
 * 3. Replaces branch contents with the copied build
 * 4. Commits, pushes to origin, then switches back to main
 */

import fs from 'fs'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distPath = path.join(root, 'dist')
const tempPath = path.join(os.tmpdir(), `dist-gh-pages-${Date.now()}`)

function run(cmd, opts = {}) {
  return execSync(cmd, { cwd: root, encoding: 'utf-8', ...opts })
}

function getCurrentBranch() {
  return run('git rev-parse --abbrev-ref HEAD').trim()
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const name of fs.readdirSync(src)) {
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
  console.log('Copying dist/ to temp...')
  fs.mkdirSync(tempPath, { recursive: true })
  copyDir(distPath, tempPath)

  const hasLocalChanges = run('git status --porcelain').trim() !== ''
  if (hasLocalChanges) {
    console.log('Stashing local changes so we can switch branches...')
    run('git stash push -u -m "deploy-gh-pages"', { stdio: 'inherit' })
  }

  console.log('Checking out gh-pages...')
  run('git checkout gh-pages', { stdio: 'inherit' })

  console.log('Replacing branch contents with build...')
  for (const name of fs.readdirSync(root)) {
    if (name === '.git') continue
    const entry = path.join(root, name)
    if (fs.statSync(entry).isDirectory()) {
      rmDir(entry)
    } else {
      fs.unlinkSync(entry)
    }
  }
  for (const name of fs.readdirSync(tempPath)) {
    const srcEntry = path.join(tempPath, name)
    const destEntry = path.join(root, name)
    if (fs.statSync(srcEntry).isDirectory()) {
      copyDir(srcEntry, destEntry)
    } else {
      fs.copyFileSync(srcEntry, destEntry)
    }
  }

  console.log('Committing...')
  run('git add -A', { stdio: 'inherit' })
  try {
    run('git commit -m "Update with latest build"', { stdio: 'inherit' })
  } catch (_) {
    console.log('Nothing to commit (build unchanged).')
  }

  console.log('Pushing gh-pages to origin...')
  run('git push origin gh-pages', { stdio: 'inherit' })

  console.log('Switching back to main...')
  run('git checkout main', { stdio: 'inherit' })

  if (hasLocalChanges) {
    console.log('Restoring stashed changes...')
    run('git stash pop', { stdio: 'inherit' })
  }
} finally {
  if (fs.existsSync(tempPath)) {
    rmDir(tempPath)
  }
}

console.log('Deploy complete. GitHub Pages will update shortly.')
