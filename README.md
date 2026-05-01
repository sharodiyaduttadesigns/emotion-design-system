# Emotion Design System

A modern, accessible, and themeable component library built with React 19, TypeScript, and CSS variables. Designed following atomic design principles with light and dark mode support.

## Overview

Emotion Design System is a production-ready design system that provides a foundational set of reusable UI components. The system emphasizes accessibility, semantic HTML, type safety, and CSS-in-CSS variable management for enterprise-level theming capabilities.

### Key Features

- **Type-Safe Components**: Full TypeScript support with strict typing
- **Atomic Design Architecture**: Organized as atoms, molecules, and organisms
- **CSS Variables Theming**: Dynamic light/dark mode with CSS custom properties
- **Accessible**: WCAG 2.1 compliant with ARIA labels and semantic roles
- **Responsive Design**: Mobile-first approach with media query support
- **Zero Runtime Dependencies**: Pure React with no external styling libraries
- **Live Documentation**: Professional component documentation website with search and filtering

## Tech Stack

- **Framework**: React 19.2.4
- **Language**: TypeScript 6.0.2
- **Build Tool**: Vite 8.0.4
- **Code Quality**: ESLint 9.39.4
- **Deployment**: gh-pages

## Project Structure

```
src/
├── components/
│   ├── atoms/              # Base UI components
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Alert/
│   │   └── DownloadButton/
│   ├── molecules/          # Composite components (reserved)
│   └── organisms/          # Complex component groups (reserved)
├── App.tsx                 # Documentation site
├── App.css                 # Layout and documentation styles
├── index.css               # Global styles and design tokens
└── main.tsx                # Entry point
```

## Design Tokens

### CSS Variables

The design system uses CSS custom properties for theming. All tokens are defined in `index.css`:

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--text` | `#6b6375` | `#9ca3af` | Body text color |
| `--text-h` | `#08060d` | `#f3f4f6` | Heading color |
| `--bg` | `#fff` | `#16171d` | Background |
| `--border` | `#e5e4e7` | `#2e303a` | Border color |
| `--code-bg` | `#f4f3ec` | `#1f2028` | Code/preview background |
| `--accent` | `#aa3bff` | `#c084fc` | Purple accent (interactive) |
| `--accent-bg` | `rgba(170, 59, 255, 0.1)` | `rgba(192, 132, 252, 0.15)` | Accent background |
| `--accent-border` | `rgba(170, 59, 255, 0.5)` | `rgba(192, 132, 252, 0.5)` | Accent border |

### Typography

- **Font Family** (sans-serif): `system-ui, 'Segoe UI', Roboto, sans-serif`
- **Font Family** (heading): `system-ui, 'Segoe UI', Roboto, sans-serif`
- **Font Family** (mono): `ui-monospace, Consolas, monospace`
- **Base Font Size**: 18px (16px on mobile)
- **Line Height**: 145%

## Components

### Badge

Display status or category labels in multiple variants.

**Props:**
```typescript
type BadgeProps = {
  label: string              // Required: Badge text content
  variant?: 'default' | 'success' | 'warning' | 'error'  // Default: 'default'
  className?: string         // Optional: Additional CSS classes
}
```

**Usage:**
```jsx
<Badge label="Default" />
<Badge label="Success" variant="success" />
<Badge label="Warning" variant="warning" />
<Badge label="Error" variant="error" />
```

**Accessibility**: Uses `role="status"` for dynamic status announcements.

---

### Avatar

Display user profile pictures or initials in various sizes.

**Props:**
```typescript
type AvatarProps = {
  initials: string           // Required: 1-2 character initials
  size?: 'sm' | 'md' | 'lg'  // Default: 'md'
  className?: string         // Optional: Additional CSS classes
}
```

**Features:**
- Automatically truncates to 2 characters
- Converts to uppercase
- Circular design with CSS background

**Usage:**
```jsx
<Avatar initials="JD" size="sm" />
<Avatar initials="AB" size="md" />
<Avatar initials="XY" size="lg" />
```

**Accessibility**: Implements `role="img"` with descriptive `aria-label`.

---

### Alert

Communicate messages, warnings, errors, or success states with optional icons.

**Props:**
```typescript
type AlertProps = {
  message: string            // Required: Alert message text
  type?: 'info' | 'success' | 'error'  // Default: 'info'
  icon?: boolean             // Default: true
  className?: string         // Optional: Additional CSS classes
}
```

**Features:**
- Context-aware SVG icons (check for success, error circle for error, info circle for info)
- Semantic alert role for screen readers
- Type-specific styling and colors

**Usage:**
```jsx
<Alert message="This is an info alert" type="info" />
<Alert message="Operation successful" type="success" icon={true} />
<Alert message="An error occurred" type="error" />
```

**Accessibility**: Uses `role="alert"` for immediate announcements, `aria-hidden` for decorative icons.

---

### DownloadButton

Action button for downloads and primary interactions with integrated download icon.

**Props:**
```typescript
type DownloadButtonProps = {
  href?: string              // Optional: Anchor href for downloads
  download?: string          // Optional: Downloaded filename
  children?: React.ReactNode // Optional: Button label (default: 'Download')
  className?: string         // Optional: Additional CSS classes
  onClick?: () => void       // Optional: Click handler for button mode
}
```

**Features:**
- Renders as `<a>` when `href` is provided, otherwise `<button>`
- Integrated SVG download arrow icon
- Semantic HTML with ARIA labels
- Supports both link and button behaviors

**Usage:**
```jsx
{/* Link mode for file downloads */}
<DownloadButton href="/file.pdf" download="document.pdf">
  Download PDF
</DownloadButton>

{/* Button mode for actions */}
<DownloadButton onClick={() => handleExport()}>
  Export Data
</DownloadButton>
```

**Accessibility**: Proper `aria-label` generation based on content type.

---

## Documentation Site

The included documentation website (`App.tsx`) features:

- **Dark Sidebar Navigation**: Component quick links with smooth scrolling
- **Search Functionality**: Real-time filtering by component name and description
- **Hero Section**: Component count and system overview
- **Component Cards**: Live previews, descriptions, and type documentation
- **Responsive Grid**: Adapts from multi-column to single-column layout
- **Dark Mode Support**: Full theme switching via `prefers-color-scheme`

### Navigation

The documentation site is structured with:
- Sticky header with system branding and search
- Left sidebar (240px, hidden on mobile < 640px)
- Main content area with auto-filling card grid (minmax 400px)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/emotion-design-system.git
cd emotion-design-system

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with HMR
npm run dev

# Opens at http://localhost:5173
```

### Building

```bash
# Type check and build for production
npm run build

# Output in dist/ directory with correct base paths for gh-pages
```

### Linting

```bash
# Run ESLint with TypeScript support
npm run lint
```

## Deployment

### GitHub Pages

```bash
# Deploy to gh-pages branch
npm run deploy

# Or manually:
npm run build
npx gh-pages -d dist
```

The project is pre-configured with:
- Base path: `/emotion-design-system/`
- Output directory: `dist/`
- Predeploy hook: Automatically builds before deployment

**After deployment**, enable GitHub Pages in repository settings:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages`
4. Folder: `/ (root)`

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+
- Mobile browsers with CSS custom properties support

## Theming

### Light Mode (Default)

Automatically applied based on system preferences or when `prefers-color-scheme: light`.

### Dark Mode

Automatically applied when `prefers-color-scheme: dark`. All components respect the system color scheme preference.

### Custom Theming

Override CSS variables in your application:

```css
:root {
  --accent: #your-color;
  --text: #your-text-color;
  /* Override any variable */
}
```

## Component Guidelines

### Creating New Components

1. Create a new folder in `atoms/`, `molecules/`, or `organisms/`
2. Export a typed React component
3. Create accompanying `.css` file with BEM-style naming
4. Use CSS variables for colors, spacing, and other tokens
5. Include proper TypeScript types and ARIA attributes

### Naming Conventions

- **Components**: PascalCase (`Badge.tsx`)
- **Styles**: kebab-case selectors (`.badge`, `.badge--variant`)
- **Props**: camelCase (`variant`, `className`)

### Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels where appropriate
- [ ] Keyboard navigation support
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Focus indicators visible
- [ ] Screen reader tested

## Performance

- **Vite**: Fast cold start (~400ms) and instant HMR
- **Tree-shaking**: Unused components are removed in production
- **CSS Variables**: No runtime overhead, native browser support
- **No Runtime Dependencies**: Pure React and CSS

## Contributing

1. Create feature branch (`git checkout -b feature/component-name`)
2. Commit changes (`git commit -am 'Add new component'`)
3. Push to branch (`git push origin feature/component-name`)
4. Create Pull Request

## License

MIT

## Version

0.0.0 (Alpha)
