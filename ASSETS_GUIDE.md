# Asset Management Guide
Comprehensive guide for managing assets in this portfolio using Vite's optimized asset pipeline.
## Overview
This project uses **Vite-optimized asset management** following React and Vite best practices. All static assets (images, audio) are imported as ES6 modules, enabling automatic cache-busting, optimization, and version management through Vite's build pipeline.
## Directory Structure
```
src/assets/
├── index.js                      # Central aggregator
├── images/
│   ├── index.js                  # Centralized image exports
│   ├── projects/                 # Project images imported by Vite
│   │   ├── angel-portfolio-game.webp
│   │   ├── xpath-query-containment.webp
│   │   ├── apache-ozone-ha-poc.webp
│   │   ├── fire-detection-classification.webp
│   │   ├── dnn-compression-explainability.webp
│   │   ├── expression-parser.webp
│   │   ├── vanheede.webp
│   │   ├── bank-transfer.webp
│   │   ├── transformer.webp
│   │   ├── dumbo-compiler.webp
│   │   └── windowing.webp
│   ├── hero.png                  # Misc assets (currently unused)
│   └── react.svg                 # Misc assets
└── audio/
    ├── index.js                  # Centralized audio exports
    ├── atmosphere.mp3            # Imported by Vite
    └── textures/                 # Future use
```
## Features
- **Automatic cache-busting**: Vite adds a unique hash to each build (e.g., `atmosphere.mp3` → `atmosphere-ilEg77Wj.mp3`)
- **Asset optimization**: Automatic compression and minification of images and audio
- **Centralized management**: Single source of truth for all asset references
- **ES6 imports**: Type-safe, tree-shakable asset imports
- **Version management**: Automatic versioning prevents old file caching in production
## Getting Started
### Assets Import Structure
All assets are imported in index files and re-exported for easy access:
**Images** (`src/assets/images/index.js`):
```javascript
import angelPortfolioGameImg from './projects/angel-portfolio-game.webp';
export const projectImages = {
  angelPortfolioGame: angelPortfolioGameImg,
  // ... other images
};
```
**Audio** (`src/assets/audio/index.js`):
```javascript
import atmosphereAudio from './atmosphere.mp3';
export const audioAssets = {
  atmosphere: atmosphereAudio
};
```
### Usage in Components
Import assets from their respective index files:
```javascript
// In src/data/projects.js
import { projectImages } from '../assets/images/index.js';
export const projects = [
  {
    slug: "angel-portfolio-game",
    image: projectImages.angelPortfolioGame,
    // ...
  }
];
```
```javascript
// In src/components/audio/MusicPlayer.jsx
import { audioAssets } from '../../assets/audio/index.js';
<audio src={audioAssets.atmosphere} />
```
## Adding New Assets
### Adding a Project Image
1. Place the image file in `src/assets/images/projects/`
2. Import it in `src/assets/images/index.js`:
   ```javascript
   import yourImageImg from './projects/your-image.webp';
   ```
3. Add it to the `projectImages` export:
   ```javascript
   export const projectImages = {
     // ...
     yourImage: yourImageImg,
   };
   ```
4. Reference it in your code:
   ```javascript
   image: projectImages.yourImage,
   
   ```
### Adding Audio
Follow the same pattern as images in `src/assets/audio/index.js`
## Build and Deployment
```bash
# Development with hot reload
npm run dev
# Production build with optimization
npm run build
# Preview the production build
npm run preview
```
All assets will be output to `dist/assets/` with automatic version hashes.
### Build Output Example
```
dist/assets/angel-portfolio-game-DvVY5e_u.webp    8.40 kB
dist/assets/expression-parser-BrSGtYkI.webp       8.96 kB
dist/assets/atmosphere-ilEg77Wj.mp3               3,665.50 kB
```
The hash suffix ensures cache freshness across deployments.
## Public Directory
The `public/` directory is for static assets that don't need optimization (like the favicon).
- Favicon metadata: `public/images/Icon.png`
## Technical Details
- **Vite asset imports**: Binary file imports are transformed into optimized public URLs
- **Hash versioning**: Automatically appended during build for cache invalidation
- **Image formats**: Supports `.webp`, `.png`, `.jpg`, `.svg` and more
- **Audio formats**: Supports `.mp3`, `.wav`, `.ogg` and more
## Best Practices
1. Always import assets as ES6 modules from `src/assets/`
2. Use descriptive names for assets that match their purpose
3. Keep the index files organized by asset type
4. Avoid duplicating assets; use the centralized exports
5. Let Vite handle optimization—don't pre-optimize images
## Future Improvements
- Add image compression tooling
- Implement lazy loading for large images
- Add alt text management system
- Support for multiple image formats (WebP, AVIF)
