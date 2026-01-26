# Laura Folk Fair - HTML to Vue Migration Plan

## Overview
This document outlines the migration strategy from the static HTML website (`/website` folder) to a Vue.js application (`/src` folder) using **6 generic, reusable components** to maintain consistency and simplify styling across the entire site.

---

## Component Architecture Strategy

### Core Principle
**Use 6 generic, flexible components that can be configured via props to handle all content patterns across the site.**

This approach ensures:
- Consistent styling across all pages
- Easy maintenance (change one component, updates everywhere)
- Flexible content arrangement
- Reduced code duplication

### Background Strategy
- **Default**: All pages have a white background
- **Components**: Can optionally have colored backgrounds via `bgColor` prop
- **Transparency**: Components without `bgColor` prop are transparent, showing the white background
- **Consistent Spacing**: Components handle their own padding/spacing regardless of background

---

## The 6 Core Components

### 1. `HeroSection.vue`
**Purpose**: Hero sections for all pages (home, about, attractions, etc.)

**Props**:
- `title` (String, required) - Main headline
- `subtitle` (String, optional) - Subheadline
- `description` (String, optional) - Additional description text
- `eventDates` (String, optional) - Event dates (home page)
- `location` (String, optional) - Event location (home page)
- `ctaPrimary` (Object: `{ text, to, query }`, optional) - Primary CTA button
- `ctaSecondary` (Object: `{ text, to, query }`, optional) - Secondary CTA button
- `variant` (String: 'default' | 'home', default: 'default') - Styling variant

**Usage Examples**:
- Home page: Full hero with dates, location, dual CTAs
- Other pages: Title + subtitle

**Source Patterns**: All page hero sections

---

### 2. `ImageTextSegment.vue`
**Purpose**: Image on one side, title and text content on the other (flexible layout)

**Props**:
- `image` (String, optional) - Image URL or placeholder type
- `imageSide` (String: 'left' | 'right', default: 'left') - Which side image appears
- `title` (String, optional) - Section title
- `titleIcon` (String, optional) - Material Icon name to show before title
- `text` (String, optional) - Main paragraph text
- `items` (Array of Strings, optional) - Bullet list items
- `highlight` (Object: `{ text, variant }`, optional) - Highlight box (e.g., special event notice)
- `bgColor` (String: 'transparent' | 'gray' | 'cream' | 'blue-dark', default: 'transparent') - Background color (transparent shows white page background)

**Usage Examples**:
- Attractions page: Each attraction (image + title + description + bullet list)
- About page: Founder section (image + title + text)
- Accommodation: Property listings

**Source Patterns**: 
- `website/attractions.html` - Artisan Stalls, Food Court, etc.
- `website/about.html` - Honoring Our Founder

---

### 3. `IconGridSegment.vue`
**Purpose**: Grid of icon + title + text items (usually 3-4 columns)

**Props**:
- `title` (String, optional) - Section heading (centered above grid)
- `items` (Array: `[{ icon, title, text, link }]`, required) - Grid items
- `columns` (Number: 2 | 3 | 4, default: 3) - Number of columns
- `iconSize` (String: 'sm' | 'md' | 'lg', default: 'md') - Icon size
- `bgColor` (String: 'transparent' | 'gray' | 'cream' | 'blue-dark', default: 'transparent') - Background color (transparent shows white page background)
- `cardStyle` (Boolean, default: true) - Whether items have card styling
- `cardBgColor` (String: 'transparent' | 'gray' | 'cream', default: 'gray') - Background color for individual cards

**Usage Examples**:
- Home page: Attractions preview (4 columns)
- About page: "What Makes Us Special" (3 columns)
- Volunteers page: Volunteer roles (4 columns)
- Attractions page: "More to Explore" (4 columns)

**Source Patterns**:
- `website/index.html` - Attractions preview cards
- `website/about.html` - What Makes Us Special
- `website/volunteers.html` - Volunteer heroes

---

### 4. `TextContentSegment.vue`
**Purpose**: Heading + paragraphs or lists (simple text content)

**Props**:
- `title` (String, optional) - Section heading
- `titleAlign` (String: 'left' | 'center', default: 'left') - Title alignment
- `content` (String | Array, required) - Paragraph text or array of paragraphs
- `listItems` (Array of Strings, optional) - Bullet list items
- `listIcon` (String, optional) - Custom bullet icon/color
- `maxWidth` (String: 'full' | '4xl' | '3xl', default: 'full') - Content max width
- `bgColor` (String: 'transparent' | 'gray' | 'cream' | 'blue-dark', default: 'transparent') - Background color (transparent shows white page background)

**Usage Examples**:
- About page: "Our Story" section
- About page: "Our Mission" (with bullet list)
- Home page: "About the Fair" intro text
- Contact page: Contact information

**Source Patterns**:
- `website/about.html` - Our Story, Our Mission
- `website/index.html` - About the Fair intro

---

### 5. `TwoColumnSegment.vue`
**Purpose**: Two side-by-side text blocks (equal columns)

**Props**:
- `title` (String, optional) - Section heading (centered above columns)
- `leftColumn` (Object: `{ title, content }`, required) - Left column content
- `rightColumn` (Object: `{ title, content }`, required) - Right column content
- `bgColor` (String: 'transparent' | 'gray' | 'cream' | 'blue-dark', default: 'transparent') - Background color (transparent shows white page background)

**Usage Examples**:
- About page: "A Journey Through Time" (Humble Beginnings + Modern Tradition)
- Any two-column text comparison

**Source Patterns**:
- `website/about.html` - A Journey Through Time section

---

### 6. `InfoBarSegment.vue`
**Purpose**: Quick info displayed in columns (prices, times, location, etc.)

**Props**:
- `items` (Array: `[{ label, value }]`, required) - Info items to display
- `columns` (Number: 2 | 3 | 4, default: 3) - Number of columns
- `bgColor` (String: 'transparent' | 'white' | 'gray' | 'cream' | 'blue-dark', default: 'white') - Background color (white is common for info bars)
- `variant` (String: 'default' | 'compact', default: 'default') - Styling variant

**Usage Examples**:
- Home page: Admission prices, event times, location
- Any quick reference information

**Source Patterns**:
- `website/index.html` - Quick Info Bar

---

## Benefits of This Approach

### 1. **Consistent Styling**
- All similar content uses the same component
- Change styling in one place, updates everywhere
- Easier to maintain brand consistency

### 2. **Simplified Development**
- Only 6 component types to learn and maintain
- Clear patterns for where to use each component
- Less decision fatigue when building new pages

### 3. **Flexible Configuration**
- Props allow customization without creating new components
- Same component can handle many variations
- Easy to add new content without new components

### 4. **Easier Refactoring**
- Update all hero sections by changing one component
- Global style changes affect entire site
- Less code duplication

---

## Component Usage Examples

### Example 1: HeroSection Variations

```vue
<!-- Home page hero -->
<HeroSection
  variant="home"
  title="WELCOME TO THE LAURA FOLK FAIR"
  subtitle="Two days of fun & entertainment"
  eventDates="Saturday 18th and Sunday 19th April 2026"
  location="Herbert Street, Laura SA 5480"
  :ctaPrimary="{ text: 'PLAN YOUR VISIT', to: '/getting-there' }"
  :ctaSecondary="{ text: 'BECOME A STALLHOLDER', to: '/contact', query: { subject: 'Stallholder' } }"
/>

<!-- About page hero -->
<HeroSection
  title="ABOUT THE LAURA FOLK FAIR"
  subtitle="Celebrating community, culture, and connection for over four decades"
/>
```

### Example 2: ImageTextSegment Variations

```vue
<!-- Attraction with image on right -->
<ImageTextSegment
  imageSide="right"
  title="ARTISAN STALLS"
  titleIcon="shopping_bag"
  text="Browse unique crafts, artwork, and local products from talented community vendors"
  :items="['Over 100 stallholders', 'Local artwork and crafts', 'Support local artisans']"
  image="images/artisan-stalls.jpg"
/>

<!-- Founder section with gray background -->
<ImageTextSegment
  imageSide="left"
  title="Richard 'Dick' Biles"
  text="A passionate advocate for local artists..."
  image="images/founder.jpg"
  bgColor="gray"
/>

<!-- Attraction with transparent background (shows white) -->
<ImageTextSegment
  imageSide="right"
  title="ARTISAN STALLS"
  text="Browse unique crafts..."
  image="images/artisan-stalls.jpg"
  bgColor="transparent"
/>
```

### Example 3: IconGridSegment Variations

```vue
<!-- Attractions preview (4 columns) -->
<IconGridSegment
  title="WHAT'S ON"
  :items="[
    { icon: 'shopping_bag', title: 'Artisan Stalls', text: 'Browse unique crafts...', link: '/attractions' },
    { icon: 'restaurant', title: 'Food Court', text: 'Savor delicious festival favorites...', link: '/attractions' },
    { icon: 'mic', title: 'Live Music', text: 'Enjoy live music...', link: '/attractions' },
    { icon: 'attractions', title: 'Sideshow Rides', text: 'Rides to excite...', link: '/attractions' }
  ]"
  :columns="4"
/>

<!-- What Makes Us Special (3 columns, transparent background) -->
<IconGridSegment
  title="WHAT MAKES US SPECIAL"
  :items="[
    { icon: 'handshake', title: 'Community Focus', text: 'Supporting local artisans...' },
    { icon: 'family_restroom', title: 'Family Friendly', text: 'Entertainment for all ages' },
    { icon: 'palette', title: 'Cultural Heritage', text: 'Celebrating 40+ years' }
  ]"
  :columns="3"
  bgColor="transparent"
  cardBgColor="gray"
/>
```

### Example 4: TextContentSegment Variations

```vue
<!-- Simple text content -->
<TextContentSegment
  title="OUR STORY"
  content="For over four decades, the Laura Folk Fair has been the heart of our community..."
/>

<!-- With bullet list -->
<TextContentSegment
  title="OUR MISSION"
  titleAlign="center"
  :listItems="[
    'To celebrate and preserve local culture...',
    'Play a key role in sustaining a healthy community...',
    'Promote Laura to all who visit...'
  ]"
  maxWidth="4xl"
/>
```

---

## Layout Components

### `AppHeader.vue` ✅ (Needs Implementation)
- **Purpose**: Site-wide navigation header
- **Location**: `/src/components/AppHeader.vue`
- **Features**: Logo, desktop/mobile nav, active route highlighting, sticky
- **Source**: `website/header.html`

### `AppFooter.vue` ✅ (Needs Implementation)
- **Purpose**: Site-wide footer
- **Location**: `/src/components/AppFooter.vue`
- **Features**: Logo, links, contact info, copyright
- **Source**: `website/footer.html`

### `MainLayout.vue` ✅ (Exists, needs updates)
- **Purpose**: Wrapper layout for all pages
- **Structure**: `<AppHeader /><slot /><AppFooter />`

---

## Special Components (Outside the 6)

### `ContactForm.vue`
- **Purpose**: Contact form with validation
- **Location**: `/src/components/ContactForm.vue`
- **Props**: `defaultSubject` (String, optional)
- **Note**: Form is unique enough to warrant its own component

### `GoogleMap.vue`
- **Purpose**: Embedded Google Maps iframe
- **Location**: `/src/components/GoogleMap.vue`
- **Props**: `address` (String), `zoom` (Number), `height` (String)
- **Note**: Specialized component for Getting There page

---

## Page Structure Mapping (Using 6 Generic Components)

### Home Page (`/`)
- **Component**: `/src/pages/Home.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (variant: 'home', with dates, location, CTAs)
  2. `InfoBarSegment` (admission prices, times, location)
  3. `ImageTextSegment` (sponsor logo - image only, centered)
  4. `TextContentSegment` (About the Fair intro + CTA)
  5. `IconGridSegment` (4 attractions preview cards)
  6. `TextContentSegment` (Become a Stallholder CTA section)
  7. `IconGridSegment` (3 stats: visitors, stallholders, years)

### About Page (`/about`)
- **Component**: `/src/pages/About.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle)
  2. `TextContentSegment` (Our Story)
  3. `TwoColumnSegment` (Humble Beginnings + Modern Tradition)
  4. `TextContentSegment` (Our Mission - with bullet list)
  5. `ImageTextSegment` (Founder section - image + text, centered)
  6. `IconGridSegment` (What Makes Us Special - 3 items)

### Attractions Page (`/attractions`)
- **Component**: `/src/pages/Attractions.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle)
  2. `ImageTextSegment` (Artisan Stalls - image right)
  3. `ImageTextSegment` (Food Court - image left, with highlight)
  4. `ImageTextSegment` (Live Music - image right)
  5. `ImageTextSegment` (Sideshow Rides - image left)
  6. `IconGridSegment` (More to Explore - 4 items)

### Getting There Page (`/getting-there`)
- **Component**: `/src/pages/GettingThere.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle)
  2. `ImageTextSegment` (Google Map - image only, full width)
  3. `TextContentSegment` (Driving directions)
  4. `TextContentSegment` (Parking info)
  5. `TextContentSegment` (Public transport)
  6. `TextContentSegment` (Accessibility)

### Accommodation Page (`/accommodation`)
- **Component**: `/src/pages/Accommodation.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle)
  2. `TextContentSegment` (Booking tip alert)
  3. `TextContentSegment` (Hotels section heading)
  4. `ImageTextSegment` (North Laura Hotel)
  5. `TextContentSegment` (Camping section heading)
  6. `ImageTextSegment` (Laura Community Caravan Park)
  7. `ImageTextSegment` (Gladstone Caravan Park)
  8. `TextContentSegment` (Alternative options)

### Sponsors Page (`/sponsors`)
- **Component**: `/src/pages/Sponsors.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle + intro text)
  2. `ImageTextSegment` (Official Event Sponsor - image only, centered)
  3. `TextContentSegment` (Platinum heading)
  4. `IconGridSegment` (Platinum sponsors - 3-4 columns)
  5. `TextContentSegment` (Gold heading)
  6. `IconGridSegment` (Gold sponsors - 3 columns)
  7. `TextContentSegment` (Silver heading)
  8. `IconGridSegment` (Silver sponsors - 4 columns)
  9. `TextContentSegment` (Bronze heading)
  10. `IconGridSegment` (Bronze sponsors - 4 columns)
  11. `TextContentSegment` (Become a Sponsor CTA)

### Volunteers Page (`/volunteers`)
- **Component**: `/src/pages/Volunteers.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle)
  2. `TextContentSegment` (Thank you message)
  3. `IconGridSegment` (Volunteer heroes - 4 items)
  4. `TextContentSegment` (Essential suppliers list)
  5. `TextContentSegment` (Become a volunteer CTA)

### Contact Page (`/contact`)
- **Component**: `/src/pages/Contact.vue`
- **Layout**: `MainLayout`
- **Sections**:
  1. `HeroSection` (title + subtitle)
  2. `TextContentSegment` (Contact information)
  3. `ContactForm` (special component)
  4. `IconGridSegment` (Contact reasons - 4 items)
  5. `TextContentSegment` (Response time notice)

---

## Router Configuration

### Routes Setup
```javascript
// /src/router/index.js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Laura Folk Fair 2026 - Two Days of Fun & Entertainment',
      description: 'Join us for two amazing days...',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: { ... }
  },
  // ... other routes
]
```

---

## Migration Steps

### Phase 1: Foundation (Current)
- ✅ Vue project setup with Vite
- ✅ Tailwind CSS v4 configuration
- ✅ Router setup
- ✅ Basic layout structure
- ⏳ Implement `AppHeader.vue`
- ⏳ Implement `AppFooter.vue`
- ⏳ Fix `MainLayout.vue` imports

### Phase 2: Build the 6 Core Components
1. **`HeroSection.vue`** - Most complex, used on every page
2. **`ImageTextSegment.vue`** - Flexible image + text layout
3. **`IconGridSegment.vue`** - Grid of icon + title + text
4. **`TextContentSegment.vue`** - Simple heading + paragraphs/lists
5. **`TwoColumnSegment.vue`** - Two side-by-side text blocks
6. **`InfoBarSegment.vue`** - Quick info in columns

### Phase 3: Special Components
1. `ContactForm.vue` - Contact form
2. `GoogleMap.vue` - Embedded map (or use ImageTextSegment with iframe)

### Phase 4: Build Pages Using Components
1. **Home Page** - Uses all 6 components (good test case)
2. **About Page** - Uses Hero, TextContent, TwoColumn, ImageText, IconGrid
3. **Attractions Page** - Uses Hero, multiple ImageTextSegments, IconGrid
4. **Getting There Page** - Uses Hero, TextContent, GoogleMap
5. **Accommodation Page** - Uses Hero, TextContent, ImageText
6. **Sponsors Page** - Uses Hero, ImageText, TextContent, IconGrid
7. **Volunteers Page** - Uses Hero, TextContent, IconGrid
8. **Contact Page** - Uses Hero, TextContent, ContactForm, IconGrid

### Phase 5: Polish & Optimization
1. Add page meta tags to all routes
2. Implement schema.org JSON-LD
3. Add loading states
4. Optimize images
5. Add error handling
6. Test responsive design
7. SEO audit

---

## Component File Structure

```
/src
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue          # 1 of 6 core components
│   ├── ImageTextSegment.vue     # 2 of 6 core components
│   ├── IconGridSegment.vue      # 3 of 6 core components
│   ├── TextContentSegment.vue    # 4 of 6 core components
│   ├── TwoColumnSegment.vue     # 5 of 6 core components
│   ├── InfoBarSegment.vue       # 6 of 6 core components
│   ├── ContactForm.vue          # Special component
│   └── GoogleMap.vue            # Special component (or use ImageTextSegment)
├── pages/
│   ├── Home.vue
│   ├── About.vue
│   ├── Attractions.vue
│   ├── GettingThere.vue
│   ├── Accommodation.vue
│   ├── Sponsors.vue
│   ├── Volunteers.vue
│   └── Contact.vue
├── layouts/
│   └── MainLayout.vue
├── composables/
│   ├── usePageMeta.js
│   └── useSchema.js
└── router/
    └── index.js
```

---

## Styling Strategy

### Tailwind CSS v4
- Use `@theme` directive in `src/style.css` for custom colors
- Custom colors already defined:
  - `lff-blue`: #2596BE
  - `lff-blue-dark`: #183552
  - `lff-orange`: #E16900
  - `lff-yellow`: #EFCA08
  - `lff-cream`: #EDE5BD

### CSS Classes to Migrate
- Copy custom classes from `website/styles.css`:
  - `.hero-gradient`
  - `.wave-divider`, `.wave-divider-top`
  - `.btn-primary`, `.btn-secondary`
  - `.card`
  - `.nav-enhanced`
  - `.footer-enhanced`
  - `.section-tall`, `.section-spacing`
  - `.stat-number`

### Component Scoped Styles
- Use `<style scoped>` in Vue components
- Or create utility classes in `style.css`
- Prefer Tailwind utilities where possible

---

## Data Management

### Static Data
- Create `/src/data/` folder for:
  - `attractions.js` - Attraction details
  - `accommodation.js` - Accommodation listings
  - `sponsors.js` - Sponsor information
  - `volunteers.js` - Volunteer roles
  - `constants.js` - Event dates, prices, contact info

### Example Structure
```javascript
// /src/data/constants.js
export const EVENT_INFO = {
  dates: 'Saturday 18th and Sunday 19th April 2026',
  location: 'Herbert Street, Laura SA 5480',
  times: '10:00 AM - 5:00 PM',
  admission: {
    family: 20,
    adult: 10,
    child: 5,
    under5: 0
  }
}
```

---

## SEO Considerations

### Meta Tags
- Use `usePageMeta` composable in each page
- Set unique title, description per page
- Include Open Graph tags
- Set canonical URLs

### Schema.org
- Create `useSchema` composable
- Add Event schema to Home page
- Add Organization schema
- Add LocalBusiness schema where appropriate

### Sitemap & Robots
- Generate sitemap dynamically or statically
- Maintain `robots.txt` in public folder

---

## Testing Checklist

### Component Testing
- [ ] All components render correctly
- [ ] Props validation works
- [ ] Slots work as expected
- [ ] Events emit correctly

### Page Testing
- [ ] All routes work
- [ ] Navigation highlights active route
- [ ] Mobile menu functions
- [ ] Forms submit correctly
- [ ] External links work

### Responsive Testing
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)

### SEO Testing
- [ ] Meta tags present
- [ ] Schema.org valid
- [ ] Images have alt text
- [ ] Semantic HTML structure

---

## Notes

- **Image Assets**: Move from `/website/images/` to `/public/images/` for Vue
- **Styles**: Migrate custom CSS classes to Tailwind or component styles
- **JavaScript**: Replace `load-header-footer.js` with Vue components
- **Forms**: Implement form validation and submission handling
- **Performance**: Lazy load images, code split routes
- **Accessibility**: Maintain ARIA labels, keyboard navigation

---

## Next Steps

1. **Start with Phase 1**: Complete foundation components
2. **Build Home page first**: Most complex, will establish patterns
3. **Iterate page by page**: Complete one page fully before moving to next
4. **Test as you go**: Don't wait until the end to test
5. **Refactor when needed**: If patterns emerge, extract to components

---

## Questions to Resolve

- [ ] Form submission backend/API endpoint?
- [ ] Image optimization strategy (WebP, lazy loading)?
- [ ] Analytics implementation (Google Analytics)?
- [ ] Contact form email service?
- [ ] Deployment target (Netlify, Vercel, traditional hosting)?
