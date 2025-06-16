const StyleDictionary = require('style-dictionary');

// Transformación personalizada para manejar los nombres de los tokens
StyleDictionary.registerTransform({
  name: 'name/cti/custom',
  type: 'name',
  transformer: function(prop) {
    // Eliminamos los prefijos de tema (M3/Light, M3/Dark, etc.)
    const path = prop.path.filter(part => !part.startsWith('M3/'));
    return path.join('-').toLowerCase();
  }
});

// Transformación para valores de color
StyleDictionary.registerTransform({
  name: 'color/rgba',
  type: 'value',
  matcher: function(prop) {
    return prop.attributes.category === 'color';
  },
  transformer: function(prop) {
    // Convertir el valor de color a formato rgba si es necesario
    // Por ahora, simplemente devolvemos el valor tal cual
    return prop.value;
  }
});

module.exports = {
  // Configuración de transformaciones
  transform: {
    // Usamos transformaciones estándar pero reemplazamos el transformador de nombres
    'name/cti/custom': ['attribute/cti', 'name/cti/custom'],
  },
  // Configuración de formatos
  format: {
    // Formato personalizado para SCSS
    'scss/variables': function({ dictionary, options }) {
      return dictionary.allProperties
        .map(prop => `$${prop.name}: ${prop.value};`)
        .join('\n');
    },
    // Formato personalizado para CSS
    'css/variables': function({ dictionary, options }) {
      return ':root {\n' +
        dictionary.allProperties
          .map(prop => `  --${prop.name}: ${prop.value};`)
          .join('\n') +
        '\n}';
    }
  }
};
