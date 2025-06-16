const StyleDictionary = require('style-dictionary');

// Configuración básica para Style Dictionary
module.exports = {
  // Usamos nuestro archivo de colores simplificado
  source: ['tokens/colors.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{
        destination: '_tokens.scss',
        format: 'scss/variables'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables',
        options: {
          outputReferences: true
        }
      }]
    }
  }
};
