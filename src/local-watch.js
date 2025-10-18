/**
 * Watch and Build Script for Local Development
 * Watches SCSS files and automatically rebuilds local test theme
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

import chokidar from 'chokidar';

import { FILE_NAMES } from './config.js';
import { buildLocal } from './utils/buildLocal.js';

console.log('🚀 Starting local development mode...\n');

// File paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const templatePath = path.join(rootDir, FILE_NAMES.USER_FILE);
const compiledPath = path.join(rootDir, 'dist', FILE_NAMES.COMPILED_FILE);
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
  console.log(`\n📝 Detected change in: ${filename}`);
  buildLocal(templatePath, compiledPath, outputPath, FILE_NAMES.LOCAL_TEST_FILE);
});

watcher.on('ready', () => {
  buildLocal(templatePath, compiledPath, outputPath, FILE_NAMES.LOCAL_TEST_FILE);
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
