/**
 * Build Local Theme Script
 * Combines name.theme.css with compiled-theme.css for local BetterDiscord testing
 * This allows testing without hosting the CSS file
 */

import { FILE_NAMES, PATHS } from './config.js';
import { buildLocal } from './utils/buildLocal.js';

try {
  console.log('🔨 Building local theme for testing...\n');

  buildLocal(PATHS.TEMPLATE, PATHS.COMPILED, PATHS.OUTPUT, FILE_NAMES.LOCAL_TEST_FILE);

  console.log('\n✅ Build complete!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📦 Output: dist/${FILE_NAMES.LOCAL_TEST_FILE}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('🎯 Next steps:');
  console.log(`   1. Copy dist/${FILE_NAMES.LOCAL_TEST_FILE} to BetterDiscord themes folder`);
  console.log('   2. Disable the original theme if it is already enabled');
  console.log('   3. Enable the local test theme in Discord\n');
} catch (error) {
  console.error('\n❌ Error building local theme:');
  console.error(error.message);
  process.exit(1);
}
