const fs = require('fs-extra');
const path = require('path');

const scssDir = path.join(__dirname, 'dist', 'scss');
const indexPath = path.join(scssDir, 'index.scss');

// Asegurarse de que el directorio existe
fs.ensureDirSync(scssDir);

// Contenido del archivo index.scss
const content = `// Archivo generado automáticamente - no modificar manualmente
// Reexporta todos los tokens para ser utilizados con @use o @forward

@forward 'tokens';
`;

// Escribir el archivo
fs.writeFileSync(indexPath, content, 'utf8');

console.log(`✅ Archivo index.scss generado en: ${indexPath}`);
