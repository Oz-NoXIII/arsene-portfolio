/**
 * Image Assets Index
 *
 * This file manages all image assets used throughout the application.
 * All project images are imported as ES6 modules, enabling:
 * - Automatic cache-busting through Vite versioning
 * - Image optimization and compression
 * - Type-safe asset references
 * - Efficient bundling and code-splitting
 */

// Project Images - imported from src/assets/images/projects/
import angelPortfolioGameImg from './projects/angel-portfolio-game.webp';
import xpathQueryContainmentImg from './projects/xpath-query-containment.webp';
import apacheOzoneHaPocImg from './projects/apache-ozone-ha-poc.webp';
import fireDetectionClassificationImg from './projects/fire-detection-classification.webp';
import dnnCompressionExplainabilityImg from './projects/dnn-compression-explainability.webp';
import expressionParserImg from './projects/expression-parser.webp';
import vanheedeImg from './projects/vanheede.webp';
import bankTransferImg from './projects/bank-transfer.webp';
import transformerImg from './projects/transformer.webp';
import dumboCompilerImg from './projects/dumbo-compiler.webp';
import windowingImg from './projects/windowing.webp';

export const projectImages = {
  angelPortfolioGame: angelPortfolioGameImg,
  xpathQueryContainment: xpathQueryContainmentImg,
  apacheOzoneHaPoc: apacheOzoneHaPocImg,
  fireDetectionClassification: fireDetectionClassificationImg,
  dnnCompressionExplainability: dnnCompressionExplainabilityImg,
  expressionParser: expressionParserImg,
  vanheede: vanheedeImg,
  bankTransfer: bankTransferImg,
  transformer: transformerImg,
  dumboCompiler: dumboCompilerImg,
  windowing: windowingImg
};

// Create a slug-based lookup for easy access
export const getProjectImage = (slug) => {
  const slug2Key = {
    'angel-portfolio-game': 'angelPortfolioGame',
    'xpath-query-containment': 'xpathQueryContainment',
    'apache-ozone-ha-poc': 'apacheOzoneHaPoc',
    'fire-detection-classification': 'fireDetectionClassification',
    'dnn-compression-explainability': 'dnnCompressionExplainability',
    'expression-parser': 'expressionParser',
    'vanheede-optimization-platform': 'vanheede',
    'bank-transfer-application': 'bankTransfer',
    'transformer-text-classification': 'transformer',
    'dumbo-compiler': 'dumboCompiler',
    'windowing-application': 'windowing'
  };

  return projectImages[slug2Key[slug]] || null;
};


