# Arsène's Portfolio

A personal portfolio website built with React and Vite showcasing technical projects and work in computer science.

## Description

This is a portfolio website featuring a collection of projects spanning several domains:
- Systems and compilers
- Artificial intelligence and deep learning
- Database theory and formal reasoning
- Distributed systems and infrastructure
- Full-stack web development
- Computational geometry

The site includes a standard portfolio with project cards and detailed project pages. An interactive game-based portfolio experience called **Metanoia** is currently in development and will serve as an alternative way to explore projects through a game-like interface.

## Features

- Dynamic background with sky themes
- Page transitions with context-aware animations
- Music player with ambient soundtrack
- Smooth navigation between pages
- Project detail pages with full descriptions
- Responsive design for desktop, tablet, and mobile
- Custom cursor effects
- Accessible component structure

## Technologies

- React 19
- Vite
- React Router v7
- CSS3
- ESLint

## Projects

The portfolio includes the following projects:

- Metanoia: The Interactive Portfolio (Game-based portfolio, in development)
- XPath Query Containment (Master's thesis on database query theory)
- Apache Ozone HA POC (High-availability distributed systems)
- Fire Detection Classification (Deep learning with PyTorch)
- DNN Compression & Explainability (Model compression framework)
- Expression Parser (Parser for scientific calculator)
- Transportation Optimization Website (Full-stack client project)
- Bank Transfer Application (Software engineering project)
- Transformer Text Classification (NLP with transformers)
- Dumbo Language Compiler (Compiler construction)
- Windowing Application (Computational geometry)

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── pages/              # Page components
├── components/         # Reusable components
│   ├── layout/        # Navigation, page layout, transitions
│   ├── background/    # Background effects and themes
│   ├── audio/         # Music player
│   └── ui/            # UI components (cards, typography, etc.)
├── data/              # Project and site content
├── assets/            # Images, textures, audio
└── styles/            # CSS stylesheets
```

## Planned Features

- Metanoia: Interactive game-based portfolio experience with Three.js

## License

This project is licensed under the MIT License - see the LICENSE file for details.
