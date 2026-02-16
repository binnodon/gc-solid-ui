# gc-solid-ui

A shadcn-compatible SolidJS component registry featuring 57+ fully ported components with the Vega theme. Fork from the good work done at https://github.com/stefan-karger/solid-ui and many more open libraries

## 🚀 Features

- **57+ Components**: Complete port of shadcn-ui components to SolidJS
- **shadcn CLI Compatible**: Install components using `npx shadcn@latest add`
- **Vega Theme**: Beautiful, modern design system
- **TypeScript**: Full type safety
- **Tailwind CSS v4**: Latest Tailwind features
- **Kobalte**: Built on Kobalte primitives for accessibility

## 📦 Installation

> **Important**: Namespace installation (`@gc-solid/component`) requires the registry to be in the [official shadcn registry index](https://ui.shadcn.com/r/registries.json). Until our PR is merged, use direct URLs (Method 1).

### Method 1: Direct URL Installation (Current)

Install components using direct URLs:

```bash
npx shadcn@latest add https://binnodon.github.io/gc-solid-ui/r/button.json
npx shadcn@latest add https://binnodon.github.io/gc-solid-ui/r/dialog.json
npx shadcn@latest add https://binnodon.github.io/gc-solid-ui/r/sidebar.json
```

**URL Pattern**: `https://binnodon.github.io/gc-solid-ui/r/{component-name}.json`

### Method 2: Namespace Installation (Coming Soon)

Once our registry is added to the official index, you'll be able to use:

```bash
npx shadcn@latest add @gc-solid/button
npx shadcn@latest add @gc-solid/dialog
npx shadcn@latest add @gc-solid/input
```

**Status**: Preparing PR to [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui). See [REGISTRY_SUBMISSION.md](./REGISTRY_SUBMISSION.md).

## 🧩 Available Components

- Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar
- Badge, Breadcrumb, Button, Button Group
- Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu
- Date Picker, Dialog, Direction, Drawer, Dropdown Menu
- Empty, Field, Form
- Hover Card, Input, Input Group, Input OTP
- Item, Kbd, Label
- Menubar, Native Select, Navigation Menu
- Pagination, Popover, Progress
- Radio Group, Resizable
- Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch
- Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip

## 📚 Documentation

Visit the [documentation site](https://binnodon.github.io/gc-solid-ui/) for component examples and usage guides.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build registry JSON files
npm run build:registry

# Build docs site
npm run build

# Build everything
npm run build:all
```

## 📄 License

MIT
