# Chatterbox

A minimal team chat application.

## Project setup

**Environment setup**

Use the Node version listed in the [.nvmrc](./.nvmrc) file. If you have [Node Version Manager](https://github.com/nvm-sh/nvm) installed, you can detect and use the correct version by running `nvm use` inside the project directory.

**Editor setup**

If you are using Visual Studio Code, the [.vscode](./vscode) folder lists required extensions and settings.

## Development workflow

| Script             | Action                                      |
| ------------------ | ------------------------------------------- |
| `npm install`      | Install project dependencies                |
| `npm run dev`      | Start dev server at `http://localhost:3000` |
| `npm run lint`     | Lint and format all source files            |
| `npm run generate` | Build production to `.dist`                 |
| `npm run preview`  | Preview the production build                |

**Icons**

Place SVG icons inside the [`assets/icons`](./assets/icons) folder. These will get optimised by the lint script using SVGO. The [`AppIconSpritesheet.vue`](./components/AppIconSpritesheet.vue) component is auto-generated by [`create-icon-spritesheet.js`](./scripts/create-icon-spritesheet.js) script to include all icons as symbols. To use an icon, use the [`AppIcon`](./components/AppIcon.vue) component with a name prop matching the icon's file name.

## Deployment workflow

The deployment is managed on [Render](https://render.com) with [this configuration file](./render.yaml). A build is triggered on commit to the `main` branch.
