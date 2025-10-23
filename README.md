# BetterDiscord Theme Template

A customizable BetterDiscord theme template built with SCSS, featuring automated build processes and local development workflow.

---

## 📑 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Customization Guide](#customization-guide)
  - [For Theme Developers](#for-theme-developers)
  - [For End Users](#for-end-users-customizing-without-editing-theme-file)
- [Deployment](#deployment)
  - [GitHub Pages (Recommended)](#option-1-github-pages-recommended)
  - [CDN Hosting](#option-2-cdn-hosting)
  - [Self-Hosted](#option-3-self-hosted)
- [Distribution](#distribution)
- [Troubleshooting](#troubleshooting)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🚀 Quick Navigation

| I want to... | Go to |
|--------------|-------|
| **Get started quickly** | [Quick Start](#quick-start) |
| **Develop locally** | [Development Workflow](#development-workflow) |
| **Customize colors and styles** | [Customization Guide](#customization-guide) |
| **Deploy my theme** | [Deployment](#deployment) |
| **Fix issues** | [Troubleshooting](#troubleshooting) |
| **Learn all commands** | [Available Scripts](#available-scripts) |
| **Understand the file structure** | [Project Structure](#project-structure) |

---

## Features

- 🎨 **Modular SCSS Architecture** - Organized theme components for easy customization
- 🔄 **Hot Reload Development** - Automatic rebuilding and optional auto-copy to BetterDiscord
- 🛠️ **Build Automation** - Compile, minify, and package themes with simple commands
- ✨ **Code Quality Tools** - ESLint, Prettier, and Husky pre-commit hooks
- 📦 **Local Testing Mode** - Test themes without hosting CSS files
- 🌐 **GitHub Pages Ready** - Easy deployment with automated hosting

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [BetterDiscord](https://betterdiscord.app/) installed in Discord

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/your-theme.git
cd your-theme
npm install
```

### 2. Configure Environment

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

Edit `.env` to configure your theme:

```env
# Whether to allow automatic copying of the theme to BetterDiscord folder
ALLOW_THEME_COPY=false

# File names used in the build process
USER_FILE=example.theme.css
LOCAL_TEST_FILE=example.local.theme.css
COMPILED_FILE=compiled-theme.css
COMPILED_MIN_FILE=compiled-theme.min.css
```

**Important:** Set `ALLOW_THEME_COPY=true` only if you want automatic copying to your BetterDiscord themes folder during development.

### 3. Customize Your Theme

Edit `example.theme.css` to set your theme metadata and variables:

```css
/**
 * @name Your Theme Name
 * @description A customizable BetterDiscord theme
 * @version 0.0.1
 * @author Your Name
 */
```

Customize the CSS variables in the `:root` section to change colors, fonts, sizes, and effects.

### 4. Start Development

```bash
npm run watch:local
```

This will:
- Compile SCSS files automatically when you save changes
- Rebuild the local test theme
- Optionally copy to BetterDiscord themes folder (if `ALLOW_THEME_COPY=true`)

## Available Scripts

### Development

- **`npm run watch`** - Watch SCSS files and compile to CSS
- **`npm run watch:local`** - Watch and build local test theme (recommended for development)

### Building

- **`npm run build`** - Build both expanded and minified versions
- **`npm run build:exp`** - Build expanded CSS only
- **`npm run build:min`** - Build minified CSS only
- **`npm run build:local`** - Build local test theme (includes CSS inline)

### Code Quality

- **`npm run lint`** - Check JavaScript files for errors
- **`npm run lint:fix`** - Fix JavaScript linting errors automatically
- **`npm run format`** - Check code formatting
- **`npm run format:fix`** - Fix code formatting automatically

## Project Structure

```
betterdiscord-theme-template/
├── src/
│   ├── modules/              # SCSS modules for different Discord components
│   │   ├── _variables.scss   # Theme variables
│   │   ├── _colors.scss      # Color definitions
│   │   ├── _fonts.scss       # Font imports and definitions
│   │   ├── _backgrounds.scss # Background styling
│   │   ├── _discord-*.scss   # Discord component styles
│   │   ├── _betterdiscord.scss # BetterDiscord specific styles
│   │   └── _plugins.scss     # Plugin compatibility styles
│   ├── utils/                # Build utilities
│   │   └── buildLocal.js     # Local theme builder
│   ├── config.js             # Environment configuration
│   ├── local-build.js        # Local build script
│   ├── local-watch.js        # Local watch script
│   └── main.scss             # Main SCSS entry point
├── dist/                     # Compiled output files
│   ├── compiled-theme.css    # Expanded compiled CSS
│   ├── compiled-theme.min.css # Minified compiled CSS
│   └── *.local.theme.css     # Local test theme (inline CSS)
├── assets/                   # Theme assets (fonts, images)
├── example.theme.css         # User-facing theme file (template)
├── .env.example              # Example environment configuration
├── .prettierrc.js            # Prettier configuration
├── eslint.config.js          # ESLint configuration
└── package.json              # Project dependencies and scripts
```

## Development Workflow

### Standard Workflow (with hosting)

1. Edit SCSS files in `src/modules/`
2. Run `npm run build` to compile CSS
3. Host `dist/compiled-theme.css` on GitHub Pages or a CDN
4. Update the `@import` URL in `example.theme.css`
5. Users install `example.theme.css` in BetterDiscord

### Local Testing Workflow (no hosting needed)

1. Edit SCSS files in `src/modules/`
2. Run `npm run watch:local`
3. The script automatically:
   - Compiles SCSS to CSS
   - Combines your theme template with compiled CSS
   - Creates a local test file with embedded CSS
   - Optionally copies to BetterDiscord themes folder
4. Enable the theme in Discord to see changes immediately

## Customization Guide

### For Theme Developers

#### Modifying Colors

Edit `src/modules/_colors.scss` to change the color scheme:

```scss
:root {
  --primary-color: #5865f2;
  --secondary-color: #3ba55d;
  // ... more colors
}
```

#### Adding Custom Fonts

1. Place font files in `assets/fonts/`
2. Import them in `src/modules/_fonts.scss`
3. Reference them in your theme variables

#### Modifying Component Styles

Each Discord component has its own SCSS module in `src/modules/`:

- `_discord-sidebar.scss` - Server list and navigation
- `_discord-channels.scss` - Channel list
- `_discord-chat.scss` - Main chat area
- `_discord-members.scss` - Member list
- `_discord-userarea.scss` - Bottom user area
- `_discord-modals.scss` - Popups and modals

Edit the relevant file to customize specific components.

### For End Users (Customizing Without Editing Theme File)

Users can customize the theme without editing the `.theme.css` file directly by using BetterDiscord's **Custom CSS** feature. This method is recommended because:

- Your customizations won't be overwritten when the theme updates
- Easier to experiment with different values
- No need to re-download the theme file

**How to use Custom CSS:**

1. Open Discord Settings → BetterDiscord → Custom CSS
2. Copy and paste the variables you want to customize from the theme file
3. Modify the values to your preference
4. Save and enjoy your customized theme!

**Example Custom CSS:**

```css
/* Custom color scheme */
:root {
  --primary-color: #ff6b6b; /* Change accent color to red */
  --background-primary: #1a1a1a; /* Darker background */
  --server-size: 56px; /* Larger server icons */
}

/* Optional: Enable custom background */
:root {
  --use-custom-background: 1;
  --custom-background: url("https://i.imgur.com/your-image.jpg");
  --background-blur: 8px;
  --background-opacity: 0.9;
}
```

**Tips:**
- Only include variables you want to change
- Use the default values as a reference
- Changes apply immediately with "Live CSS" enabled

## Deployment

### Option 1: GitHub Pages (Recommended)

GitHub Pages provides free, reliable hosting for your theme's CSS files.

#### Setup GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to **Pages** (under "Code and automation")
   - Under **Source**, select **Deploy from a branch**
   - Select **`main`** branch and **`/ (root)`** folder
   - Click **Save**

2. **Build your theme:**
   ```bash
   npm run build
   ```

3. **Commit and push the `dist` folder:**
   ```bash
   git add dist/
   git commit -m "Build theme for deployment"
   git push origin main
   ```

4. **Update your theme file:**
   
   Edit `example.theme.css` and update the `@import` URL to your GitHub Pages URL:
   ```css
   @import url("https://yourusername.github.io/your-theme-repo/dist/compiled-theme.css");
   ```

   Your GitHub Pages URL format is: `https://[username].github.io/[repository-name]/dist/compiled-theme.css`

5. **Verify deployment:**
   - Wait 1-2 minutes for GitHub Pages to deploy
   - Visit your CSS file URL in a browser to confirm it's accessible
   - The CSS code should display in your browser

#### Alternative: Use `gh-pages` branch

For a cleaner setup that keeps build files separate from your source code:

1. **Install gh-pages utility:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to `package.json`:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to repository settings → Pages
   - Select **`gh-pages`** branch
   - Your theme will be at: `https://yourusername.github.io/your-theme-repo/compiled-theme.css`

### Option 2: CDN Hosting

Alternative hosting options:

#### jsDelivr (Free CDN for GitHub)
Automatically serves files from your GitHub repository:
```css
@import url("https://cdn.jsdelivr.net/gh/yourusername/your-theme-repo@main/dist/compiled-theme.css");
```

Benefits:
- No setup required
- Fast global CDN
- Version support with `@tag` or `@branch`

#### Other CDN Options
- **Cloudflare Pages** - Free, fast, with custom domains
- **Netlify** - Free tier with automatic deployments
- **Vercel** - Free hosting with GitHub integration

### Option 3: Self-Hosted

Host on your own web server:

1. Build the theme: `npm run build`
2. Upload `dist/compiled-theme.css` to your web server
3. Update the `@import` URL to your server's URL
4. Ensure CORS headers are set correctly:
   ```
   Access-Control-Allow-Origin: *
   ```

## Distribution

Once hosted, distribute your theme:

1. **Create a release:**
   - Tag your version: `git tag v1.0.0`
   - Push tags: `git push --tags`
   - Create a GitHub release with the theme file attached

2. **Share the theme file:**
   - Users download `example.theme.css` (or your renamed version)
   - Users place it in their BetterDiscord themes folder
   - The theme automatically loads CSS from your hosted URL

3. **Update your theme:**
   - Edit SCSS files
   - Run `npm run build`
   - Commit and push changes
   - Users get updates automatically (no need to reinstall)

## Troubleshooting

### Theme not appearing in Discord

- Ensure BetterDiscord is properly installed
- Check that the theme file is in the themes folder:
  - Windows: `%appdata%/BetterDiscord/themes/`
  - macOS: `~/Library/Application Support/BetterDiscord/themes/`
  - Linux: `~/.config/BetterDiscord/themes/`
- Restart Discord

### Changes not showing

- Make sure you've saved the files
- Check that the watch script is running
- Try refreshing Discord with `Ctrl+R` (Windows/Linux) or `Cmd+R` (macOS)
- Clear Discord cache if needed

### Build errors

- Delete `node_modules` and run `npm install` again
- Ensure all files in `.env` are correctly named
- Check for syntax errors in SCSS files

### CSS not loading from hosted URL

- Verify the URL is accessible in a browser
- Check browser console for CORS errors
- Ensure the file path is correct
- Wait a few minutes after pushing to GitHub Pages (deployment takes time)
- Try hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (macOS)

### GitHub Pages not updating

- Check the Actions tab for deployment status
- Verify `dist` folder is committed to the repository
- Ensure GitHub Pages is enabled in repository settings
- Clear browser cache or try incognito mode

## Code Quality

This project uses:

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for automatic linting before commits
- **lint-staged** - Run linters on staged files only

Pre-commit hooks will automatically:
- Fix linting issues
- Format code
- Prevent commits with errors

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run `npm run lint:fix` and `npm run format:fix`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- Created by [Kamiikaze](https://github.com/yourusername)
- Built with [Sass](https://sass-lang.com/)
- For use with [BetterDiscord](https://betterdiscord.app/)

## Support

- [Discord Server](https://discord.gg/your-invite)
- [GitHub Issues](https://github.com/yourusername/your-theme/issues)
- [Documentation](https://github.com/yourusername/your-theme/wiki)

---

**Note:** This is a template. Remember to customize:
- Theme metadata in `example.theme.css`
- Author information
- Repository URLs
- Support links
- License (if different from MIT)
