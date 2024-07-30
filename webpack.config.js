const Encore = require("@symfony/webpack-encore");
const path = require("path");

Encore
  // Répertoire des fichiers sources
  .setOutputPath("public/build/")
  // Chemin public pour accéder aux fichiers
  .setPublicPath("/build")
  // Fichier d'entrée
  .addEntry("app", "./assets/app.js")
  // Activer les SASS/SCSS
  .enableSassLoader()
  // Activer le versionnement des fichiers
  .enableVersioning(Encore.isProduction())
  // Activer les sourcemaps
  .enableSourceMaps(!Encore.isProduction())
  // Activer le support de Babel
  .configureBabel((config) => {
    config.presets.push("@babel/preset-env");
  })
  // Configuration des fichiers de sortie
  .enableSingleRuntimeChunk()
  // Activer PostCSS
  .enablePostCssLoader()
  .configureImageRule({
    type: "asset",
    maxSize: 8192, // Convertir les images < 8kb en DataURL
    filename: "images/[name].[hash:8][ext]", // Nom de fichier et emplacement
  })
  .configureFontRule({
    type: "asset",
    maxSize: 8192, // Convertir les fonts < 8kb en DataURL
    filename: "fonts/[name].[hash:8][ext]", // Nom de fichier et emplacement
  });

module.exports = Encore.getWebpackConfig();
