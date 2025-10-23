# Contributing to BetterDiscord Theme Template

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 📑 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

### Our Standards

**Examples of behavior that contributes to a positive environment:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Examples of unacceptable behavior:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include as many details as possible using our bug report template.

**Good bug reports include:**
- A clear and descriptive title
- Exact steps to reproduce the problem
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, Discord version, BetterDiscord version, theme version)

### Suggesting Features

Feature suggestions are welcome! Please use our feature request template and include:
- A clear description of the feature
- Why this feature would be useful
- How it should work
- Any examples from other themes

### Requesting Plugin Support

If you'd like the theme to support a specific BetterDiscord plugin, please:
- Use the plugin support request template
- Provide the plugin's name, author, and repository link
- Describe the styling issues you're experiencing
- Include screenshots showing the problems

### Code Contributions

We welcome code contributions! Here's how you can help:

**Good first issues:**
- Fixing typos or improving documentation
- Adding comments to complex code sections
- Improving color schemes or variables
- Fixing minor styling issues
- Adding support for common plugins

**More advanced contributions:**
- Adding new component modules
- Improving build scripts
- Optimizing SCSS structure
- Adding new features
- Refactoring existing code

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [BetterDiscord](https://betterdiscord.app/) installed in Discord
- A code editor (VS Code, WebStorm, etc.)

### Setting Up Your Development Environment

1. **Fork the repository:**
   - Click the "Fork" button at the top right of the repository page
   - This creates a copy of the repository in your GitHub account

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/betterdiscord-theme-template.git
   cd betterdiscord-theme-template
   ```

3. **Add the upstream remote:**
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/betterdiscord-theme-template.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set `ALLOW_THEME_COPY=true` for easier testing

6. **Start development:**
   ```bash
   npm run watch:local
   ```

### Project Structure Overview

```
src/
├── modules/           # SCSS modules for Discord components
│   ├── _variables.scss    # Theme configuration variables
│   ├── _colors.scss       # Color scheme definitions
│   ├── _fonts.scss        # Font imports and typography
│   ├── _backgrounds.scss  # Background styling
│   ├── _discord-*.scss    # Component-specific styles
│   ├── _betterdiscord.scss # BetterDiscord UI styles
│   └── _plugins.scss      # Plugin compatibility
├── utils/            # Build utilities and scripts
└── main.scss         # Main SCSS entry point
```

## Development Workflow

### Branch Naming Convention

Use descriptive branch names that indicate the type of change:

- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation changes
- `style/description` - Visual style changes
- `plugin/plugin-name` - Plugin support additions

**Examples:**
```bash
feature/add-server-banners
fix/channel-list-overflow
refactor/color-variables
docs/update-readme
style/improve-modals
plugin/better-role-colors
```

### Making Changes

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Edit SCSS files in `src/modules/`
   - Follow the [coding standards](#coding-standards)
   - Test your changes in Discord

3. **Test thoroughly:**
   ```bash
   npm run watch:local
   ```
   - Test in different Discord themes (light/dark)
   - Test with other plugins enabled
   - Check for conflicts with common themes
   - Verify responsive behavior

4. **Run code quality checks:**
   ```bash
   npm run lint:fix
   npm run format:fix
   npm run build
   ```

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Keep your branch updated:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

7. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Testing Guidelines

**Before submitting a PR, test the following:**

- ✅ Theme loads correctly in BetterDiscord
- ✅ No console errors in Discord DevTools (Ctrl+Shift+I)
- ✅ Works in both light and dark Discord themes
- ✅ No visual glitches or broken layouts
- ✅ Doesn't conflict with popular plugins
- ✅ CSS compiles without errors
- ✅ Minified version works correctly
- ✅ Changes work across different Discord updates

**Testing with different configurations:**
```scss
// Test with different variable values
:root {
  --primary-color: #ff0000; // Test with different colors
  --server-size: 72px;       // Test with different sizes
  // etc.
}
```

## Coding Standards

### SCSS/CSS Guidelines

**File Organization:**
- One module per file
- Group related selectors together
- Use comments to separate major sections

**Naming Conventions:**
- Use kebab-case for class names: `.server-list-item`
- Use descriptive variable names: `--primary-text-color` not `--color1`
- Prefix custom classes with theme-specific identifier if needed

**Code Style:**
```scss
// ✅ Good
.channel-list {
  background: var(--background-secondary);
  border-radius: var(--border-radius);
  
  .channel-item {
    padding: var(--spacing-small);
    color: var(--text-primary);
    
    &:hover {
      background: var(--background-hover);
    }
  }
}

// ❌ Bad
.channel-list{background:var(--background-secondary);border-radius:var(--border-radius);}
.channel-item{padding:8px;color:#fff;}
```

**Variables:**
- Define variables in `_variables.scss` or `_colors.scss`
- Use CSS custom properties (variables) for values that might be customized
- Group related variables together

```scss
// ✅ Good - Using variables
:root {
  --primary-color: #5865f2;
  --primary-hover: #4752c4;
  --primary-active: #3c45a5;
}

.button {
  background: var(--primary-color);
  
  &:hover {
    background: var(--primary-hover);
  }
}

// ❌ Bad - Hardcoded values
.button {
  background: #5865f2;
  
  &:hover {
    background: #4752c4;
  }
}
```

**Specificity:**
- Keep specificity as low as possible
- Avoid using `!important` unless absolutely necessary
- Use Discord's existing class names when possible

**Comments:**
```scss
// ✅ Good comments
/* ==========================================
   SERVER LIST
   ========================================== */

// Style for the server list container
.server-list {
  // Hide the server discovery button
  .discovery-button {
    display: none;
  }
}

// ❌ Bad comments
// this is the server list
.server-list {
  // hides button
  .discovery-button {
    display: none; // hide
  }
}
```

### Documentation

**README Updates:**
- Update README.md if adding new features
- Add examples for new configuration options
- Update screenshots if changing UI

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Build process or tooling changes
- `plugin:` - Plugin support additions

### Examples

```bash
# Feature addition
feat(sidebar): add custom server icon size option

# Bug fix
fix(chat): resolve message padding issue in compact mode

# Documentation
docs(readme): add deployment instructions for GitHub Pages

# Refactoring
refactor(colors): reorganize color variable structure

# Plugin support
plugin(better-role-colors): add styling for role badges

# Breaking change
feat(variables)!: rename primary-color to accent-color

BREAKING CHANGE: --primary-color has been renamed to --accent-color
```

### Commit Message Rules

- Use the imperative mood ("add" not "added" or "adds")
- Don't capitalize the first letter of the subject
- No period at the end of the subject
- Limit subject line to 72 characters
- Wrap body at 72 characters
- Use the body to explain what and why, not how

## Pull Request Process

### Before Submitting

1. **Update your branch:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks:**
   ```bash
   npm run lint:fix
   npm run format:fix
   npm run build
   ```

3. **Test thoroughly** (see [Testing Guidelines](#testing-guidelines))

4. **Update documentation** if needed

### Submitting a Pull Request

1. **Push your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create the PR:**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template completely

3. **PR Title:**
   - Use the same format as commit messages
   - Examples:
     - `feat(sidebar): add custom server icon size`
     - `fix(chat): resolve message padding issue`
     - `docs(readme): improve installation instructions`

4. **PR Description:**
   Include:
   - Summary of changes
   - Motivation and context
   - Screenshots (if visual changes)
   - Testing performed
   - Related issues (use "Closes #123" to auto-close issues)
   - Breaking changes (if any)

### PR Template Example

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] Plugin support

## Changes Made
- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)
[Before/After screenshots]

## Testing Performed
- [ ] Tested in Discord (Dark theme)
- [ ] Tested in Discord (Light theme)
- [ ] Tested with popular plugins
- [ ] No console errors
- [ ] Build succeeds
- [ ] Linting passes

## Related Issues
Closes #123

## Additional Notes
Any additional context or notes.
```

### Review Process

1. **Automated Checks:**
   - Linting must pass
   - Build must succeed
   - No merge conflicts

2. **Code Review:**
   - Maintainers will review your code
   - Be responsive to feedback
   - Make requested changes promptly

3. **Approval and Merge:**
   - Once approved, a maintainer will merge your PR
   - Your contribution will be credited in the release notes

### After Your PR is Merged

1. **Delete your branch:**
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

2. **Update your fork:**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

## Issue Guidelines

### Creating Issues

**Use the appropriate template:**
- Bug Report - For reporting bugs
- Feature Suggestion - For proposing new features
- Plugin Support - For requesting plugin compatibility

**Provide complete information:**
- Fill out all required fields
- Include screenshots or videos when relevant
- Provide clear reproduction steps for bugs
- Search existing issues before creating new ones

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `plugin` - Plugin support request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `wontfix` - Won't be worked on
- `duplicate` - Already reported

## Community

### Where to Get Help

- **Discord Server:** [Join our community](https://discord.gg/your-invite)
- **GitHub Discussions:** Ask questions and share ideas
- **GitHub Issues:** Report bugs and request features

### Recognition

Contributors are recognized in:
- README.md credits section
- Release notes
- GitHub contributors page

## Questions?

If you have questions about contributing, feel free to:
- Open a discussion on GitHub
- Ask in our Discord server
- Comment on relevant issues

Thank you for contributing to make this theme better! 🎉
