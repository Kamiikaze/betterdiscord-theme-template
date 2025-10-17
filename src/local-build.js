/**
 * Build Local Theme Script
 * Combines name.theme.css with compiled-theme.css for local BetterDiscord testing
 * This allows testing without hosting the CSS file
 */

import { readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';
import { FILE_NAMES } from './config.js';

// File paths - go up one directory from src/
const rootDir = join(__dirname, '..');
const templatePath = join(rootDir, FILE_NAMES.USER_FILE);
const compiledPath = join(rootDir, 'dist', FILE_NAMES.COMPILED_FILE);
const outputPath = join(rootDir, 'dist', FILE_NAMES.LOCAL_TEST_FILE);

try {
  console.log('🔨 Building local theme for testing...\n');

  // Read template file
  console.log('📖 Reading template file...');
  let template = readFileSync(templatePath, 'utf8');

  // Read compiled CSS
  console.log('📖 Reading compiled CSS...');
  const compiledCSS = readFileSync(compiledPath, 'utf8');

  // Remove the @import line from template
  console.log('✂️  Removing @import statement...');
  template = template.replace(/@import\s+url\([^)]+\);?\s*/gi, '');

  // Append (local) to the theme name
  console.log('🏷️  Appending (local) to theme name...');
  template = template.replace(/(@name\s+)([^\n]+)/i, '$1$2 (local)');

  // Combine: metadata/variables + compiled CSS
  console.log('🔗 Combining files...');
  const combined =
    template +
    '\n\n' +
    '/* ========================================== */\n' +
    '/* COMPILED THEME STYLES (EMBEDDED FOR LOCAL TESTING) */\n' +
    '/* ========================================== */\n\n' +
    compiledCSS;

  // Write output
  console.log('💾 Writing output file...');
  writeFileSync(outputPath, combined, 'utf8');

  // Get file sizes
  const outputSize = (statSync(outputPath).size / 1024).toFixed(2);

  console.log('\n✅ Build complete!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📦 Output: dist/${FILE_NAMES.LOCAL_TEST_FILE}`);
  console.log(`📊 Size: ${outputSize} KB`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('🎯 Next steps:');
  console.log(`   1. Copy dist/${FILE_NAMES.LOCAL_TEST_FILE} to BetterDiscord themes folder`);
  console.log('   2. Enable in Discord');
  console.log('   3. Reload Discord (Ctrl+R)');
  console.log('   4. Edit SCSS → Run "npm run build:local" → Reload Discord\n');
} catch (error) {
  console.error('\n❌ Error building local theme:');
  console.error(error.message);
  process.exit(1);
}
