import { copyFileSync, readFileSync, statSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import path from 'path';

import { ALLOW_THEME_COPY, FILE_NAMES } from '../config.js';

/**
 * Builds the local test theme by combining the template and compiled CSS.
 *
 * @param {string} templatePath - Path to the template file.
 * @param {string} compiledPath - Path to the compiled CSS file.
 * @param {string} outputPath - Path to the output file.
 * @param {string} localTestFileName - Name of the local test file.
 */
export function buildLocal(templatePath, compiledPath, outputPath, localTestFileName) {
  try {
    const betterDiscordThemesPath = path.join(
      homedir(),
      'AppData',
      'Roaming',
      'BetterDiscord',
      'themes'
    );
    // Read template file
    let template = readFileSync(templatePath, 'utf8');

    // Read compiled CSS
    const compiledCSS = readFileSync(compiledPath, 'utf8');

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
    writeFileSync(outputPath, combined, 'utf8');

    const size = (statSync(outputPath).size / 1024).toFixed(2);
    console.log(`✅ Built ${localTestFileName} (${size} KB)`);

    // Copy to BetterDiscord themes folder
    if (ALLOW_THEME_COPY)
      copyThemeToBetterDiscord(outputPath, betterDiscordThemesPath, FILE_NAMES.LOCAL_TEST_FILE);
  } catch (error) {
    console.error('❌ Error building local theme:', error.message);
  }
}

/**
 * Copies the local test theme to the BetterDiscord themes folder.
 *
 * @param {string} outputPath - Path to the output file.
 * @param {string} betterDiscordThemesPath - Path to the BetterDiscord themes folder.
 * @param {string} localTestFileName - Name of the local test file.
 */
export function copyThemeToBetterDiscord(outputPath, betterDiscordThemesPath, localTestFileName) {
  try {
    // Append the filename to the BetterDiscord themes path
    const destinationPath = path.join(betterDiscordThemesPath, localTestFileName);

    // Copy the file
    copyFileSync(outputPath, destinationPath);
    console.log(`Theme copied to: ${destinationPath}`);
  } catch (error) {
    console.error(`❌ Failed to copy theme: ${error.message}`);
    console.error('💡 Try running the script with elevated privileges or check file permissions.');
  }
}
