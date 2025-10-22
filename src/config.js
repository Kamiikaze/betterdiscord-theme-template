import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';

dotenv.config();

// Whether to allow automatic copying of the theme to BetterDiscord folder
export const ALLOW_THEME_COPY = process.env.ALLOW_THEME_COPY === 'true';

// File names used in the build process
export const FILE_NAMES = {
  USER_FILE: process.env.USER_FILE,
  LOCAL_TEST_FILE: process.env.LOCAL_TEST_FILE,
  COMPILED_FILE: process.env.COMPILED_FILE,
  COMPILED_MIN_FILE: process.env.COMPILED_MIN_FILE,
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

export const PATHS = {
  ROOT: rootDir,
  TEMPLATE: path.join(rootDir, FILE_NAMES.USER_FILE),
  COMPILED: path.join(rootDir, 'dist', FILE_NAMES.COMPILED_FILE),
  OUTPUT: path.join(rootDir, 'dist', FILE_NAMES.LOCAL_TEST_FILE),
  DIST: path.join(rootDir, 'dist'),
};
