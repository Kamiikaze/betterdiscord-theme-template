/**
 * Watch and Build Script for Local Development
 * Watches SCSS files and automatically rebuilds local test theme
 */

const { spawn } = require('child_process');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const { FILE_NAMES } = require('./config');

console.log('🚀 Starting local development mode...\n');

// Paths - go up one directory from src/
const rootDir = path.join(__dirname, '..');
const compiledPath = path.join(rootDir, 'dist', FILE_NAMES.COMPILED_FILE);
const templatePath = path.join(rootDir, FILE_NAMES.USER_FILE);
const outputPath = path.join(rootDir, 'dist', FILE_NAMES.LOCAL_TEST_FILE);

// Start Sass compiler in watch mode
console.log('📦 Starting Sass compiler...');
const sassProcess = spawn(
  'npx',
  [
    'sass',
    'src/main.scss',
    `dist/${FILE_NAMES.COMPILED_FILE}`,
    '--watch',
    '--style=expanded',
    '--no-source-map',
  ],
  {
    stdio: 'inherit',
    shell: true,
    cwd: rootDir, // Run from root directory
  }
);

// Function to build local theme
function buildLocal() {
  try {
    console.log('\n🔨 Building local test theme...');

    // Read template file
    let template = fs.readFileSync(templatePath, 'utf8');

    // Read compiled CSS
    const compiledCSS = fs.readFileSync(compiledPath, 'utf8');

    // Remove @import line
    template = template.replace(/@import\s+url\([^)]+\);?\s*/gi, '');

    // Append (local) to the theme name
    template = template.replace(/(@name\s+)([^\n]+)/i, '$1$2 (local)');

    // Combine
    const combined =
      template +
      '\n\n' +
      '/* ========================================== */\n' +
      '/* COMPILED THEME STYLES (EMBEDDED FOR LOCAL TESTING) */\n' +
      '/* ========================================== */\n\n' +
      compiledCSS;

    // Write output
    fs.writeFileSync(outputPath, combined, 'utf8');

    const size = (fs.statSync(outputPath).size / 1024).toFixed(2);
    console.log(`✅ Built ${FILE_NAMES.LOCAL_TEST_FILE} (${size} KB)`);
    console.log('💡 Reload Discord (Ctrl+R) to see changes\n');
  } catch (error) {
    console.error('❌ Error building local theme:', error.message);
  }
}

// Initial build after a delay (wait for Sass to compile first)
setTimeout(() => {
  console.log('\n⏳ Waiting for initial Sass compilation...\n');
}, 1000);

// Watch for changes to compiled CSS and template
const watcher = chokidar.watch([compiledPath, templatePath], {
  persistent: true,
  ignoreInitial: false,
});

watcher.on('change', (filepath) => {
  const filename = path.basename(filepath);
  console.log(`📝 Detected change in: ${filename}`);
  buildLocal();
});

watcher.on('ready', () => {
  console.log('👀 Watching for changes...');
  console.log('   - SCSS files (via Sass)');
  console.log(`   - ${FILE_NAMES.USER_FILE}`);
  console.log('\n💡 Edit files and save to auto-rebuild');
  console.log('⛔ Press Ctrl+C to stop\n');
});

// Handle cleanup
process.on('SIGINT', () => {
  console.log('\n\n🛑 Stopping watchers...');
  watcher.close();
  sassProcess.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  watcher.close();
  sassProcess.kill();
  process.exit(0);
});
