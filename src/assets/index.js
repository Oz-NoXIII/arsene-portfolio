/**
 * Main Assets Index
 *
 * Centralized exports for all asset mappings used throughout the application.
 * This file aggregates all asset references, making it easier to manage
 * and eventually migrate to ES6 imports when files are moved from public/ to src/assets/.
 */

export { projectImages, getProjectImage } from './images/index.js';
export { audioAssets } from './audio/index.js';

/**
 * General/Meta Assets
 *
 * These are typically served from public/ directory:
 * - favicon.ico, favicon.png: Served directly by the server
 * - robots.txt, manifest.json: Meta files for PWA/SEO
 */
export const metaAssets = {
  favicon: '/images/Icon.png',
  // Add other meta assets as needed
};

