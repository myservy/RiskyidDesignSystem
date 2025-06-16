const fs = require('fs');
const path = require('path');

const src = require('./DSTest.json');

// Temas a procesar
const themes = [
  'M3/Light',
  'M3/Dark',
  'M3/Monochrome LT',
  'M3/Monochrome DT'
];

function toVarName(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[\/]/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

const out = { color: {} };

themes.forEach(theme => {
  const themeObj = src[theme];
  if (!themeObj) return;
  const themeKey = toVarName(theme); // e.g. m3_light
  out.color[themeKey] = {};

  // Procesar Schemes
  if (themeObj.Schemes) {
    Object.entries(themeObj.Schemes).forEach(([colorName, colorObj]) => {
      if (colorObj.value) {
        out.color[themeKey][toVarName(colorName)] = { value: colorObj.value };
      }
    });
  }

  // Procesar State Layers
  if (themeObj['State Layers']) {
    Object.entries(themeObj['State Layers']).forEach(([stateName, stateObj]) => {
      if (stateObj.value) {
        // Prefijo para distinguir los state layers
        out.color[themeKey][`state_${toVarName(stateName)}`] = { value: stateObj.value };
      }
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, 'tokens-style-dictionary.json'),
  JSON.stringify(out, null, 2)
);

console.log('Archivo tokens-style-dictionary.json generado correctamente con Schemes y State Layers.');