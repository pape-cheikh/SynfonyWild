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
  .configureBabelPresetEnv((config) => {
    config.presets.push("@babel/preset-env");
  })
  // Configuration des fichiers de sortie
  .enableSingleRuntimeChunk()
  // Autres configurations selon vos besoins
  .enablePostCssLoader()
  .configureImageRule({
    test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
    loader: "url-loader",
    options: {
      limit: 8192, // Convertir les images < 8kb en DataURL
      name: "[path][name].[ext]",
      context: "assets",
      outputPath: "images/",
      publicPath: "../images",
    },
  })
  .configureFontLoader({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    loader: "url-loader",
    options: {
      limit: 8192, // Convertir les fonts < 8kb en DataURL
      name: "[path][name].[ext]",
      context: "assets",
      outputPath: "fonts/",
      publicPath: "../fonts",
    },
  });

module.exports = Encore.getWebpackConfig();
