# BetterDiscord Custom Theme Template

A customizable BetterDiscord theme template built with SCSS, featuring automated build processes and local development workflow.

## Features

- 🎨 **Modular SCSS Architecture** - Organized theme components for easy customization
- 🔄 **Hot Reload Development** - Automatic rebuilding and optional auto-copy to BetterDiscord
- 🛠️ **Build Automation** - Compile, minify, and package themes with simple commands
- ✨ **Code Quality Tools** - ESLint, Prettier, and Husky pre-commit hooks
- 📦 **Local Testing Mode** - Test themes without hosting CSS files

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
3. Host `dist/compiled-theme.css` on a CDN or GitHub Pages
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

### Hosting Your Theme

1. Build the production version:
   ```bash
   npm run build
   ```

2. Upload `dist/compiled-theme.css` to:
   - GitHub Pages
   - CDN (like jsDelivr)
   - Your own web server

3. Update the `@import` URL in `example.theme.css`:
   ```css
   @import url("https://your-cdn.com/compiled-theme.css");
   ```

4. Distribute `example.theme.css` to users

### GitHub Pages Example

```css
@import url("https://yourusername.github.io/your-theme/dist/compiled-theme.css");
```

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

### Build errors

- Delete `node_modules` and run `npm install` again
- Ensure all files in `.env` are correctly named
- Check for syntax errors in SCSS files

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

---

**Note:** This is a template. Remember to customize:
- Theme metadata in `example.theme.css`
- Author information
- Repository URLs
- Support links
- License (if different from MIT)
