# BetterDiscord Modular Theme

A modular, customizable BetterDiscord theme built with SCSS for easy maintenance and customization.
## 📁 Project Structure

```
betterdiscord-theme/
├── dist/
│   └── compiled-theme.css   # Generated CSS (for easier debugging)
│   └── compiled-theme.min.css   # Generated Minified CSS
├── src/
│   ├── modules/
│   │   ├── _variables.scss  # CSS custom properties
│   │   ├── _colors.scss     # Color theming
│   │   └── ... (and more)
│   ├── main.scss            # Imports all modules
├── package.json
└── theme-template.css        # Template for users (pure CSS with variables)
```

## 🚀 Quick Start

### For Theme Developers

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the theme:**
   ```bash
   npm run build       # Production
   npm run watch       # Development (auto-rebuild)
   ```

3. **Host `dist/compiled-theme.css`** on GitHub Pages, jsDelivr, or your server

4. **Update `theme-template.css`** - Change the @import URL to your hosted CSS

5. **Distribute** the `.theme.css` file to users

### For Theme Users

1. Download the `.theme.css` file
2. Place in BetterDiscord themes folder
3. Enable in Discord Settings → Themes
4. Customize by editing CSS variables at the top of the file

## 🎨 How It Works

### The Two-File System

**`dist/compiled-theme.css`** (You build and host this):
- Contains all the actual theme styling
- Uses CSS variables like `var(--primary-color)`
- 22KB compressed
- Users never edit this

**`theme-template.css`** (Users download this):
- Pure CSS file (BetterDiscord compatible)
- Contains only CSS variable definitions
- Imports your hosted `compiled-theme.css`
- Users edit this to customize

### Example User File
```css
:root {
  --primary-color: #5865f2;  /* User can change this */
}
@import url('https://your-hosted-css.com/compiled-theme.css');
```

When users change `--primary-color`, everything using `var(--primary-color)` updates!

## 🛠️ Development Workflow

1. Edit SCSS files in `src/modules/`
2. Run `npm run watch`
3. Test in Discord (Ctrl+R to reload)
4. Build with `npm run build`
5. Upload `dist/compiled-theme.css`
6. Users reload Discord for updates!

## 📦 Hosting Options

### GitHub Pages (Free)
1. Push to GitHub
2. Enable GitHub Pages
3. URL: `https://username.github.io/repo/dist/compiled-theme.css`

### jsDelivr CDN (Recommended)
```
https://cdn.jsdelivr.net/gh/username/repo@latest/dist/compiled-theme.css
```

## 📚 Module Organization

Each file in `src/modules/` handles one aspect:

- **_variables.scss** - CSS custom property defaults
- **_colors.scss** - Color theming
- **_fonts.scss** - Typography
- **_backgrounds.scss** - Background styling
- **_sizing.scss** - Dimensions & spacing
- **_discord-base.scss** - General elements
- **_discord-sidebar.scss** - Server list & channels
- **_discord-chat.scss** - Chat & messages
- **_discord-members.scss** - Member list & profiles
- **_discord-modals.scss** - Modals & settings
- **_effects.scss** - Animations & transitions

## 🎯 Key Features

✅ Modular SCSS architecture  
✅ 11 organized modules  
✅ CSS variable system  
✅ User-friendly customization  
✅ 22KB compressed output  
✅ Complete Discord coverage  
✅ No rebuild needed for users

## 📝 License

MIT License - Feel free to use and modify!
