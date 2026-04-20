/**
 * Audio Assets Index
 *
 * Centralized management for audio assets.
 * Audio files are imported as ES6 modules for automatic cache-busting,
 * optimization, and version management by Vite.
 */

import atmosphereAudio from './atmosphere.mp3';

export const audioAssets = {
  atmosphere: atmosphereAudio
};

export default audioAssets;


