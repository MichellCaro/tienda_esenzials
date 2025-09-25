// test-imports.js
require('@babel/register')({
  presets: ['@babel/preset-react'],
  extensions: ['.js', '.jsx'], // <- permite importar .jsx
});

const path = require('path');
const fs = require('fs');

const componentsDir = path.join(__dirname, 'client', 'src', 'components');

// Función recursiva para obtener todos los archivos .jsx
function getJSXFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getJSXFiles(filePath));
    } else if (file.endsWith('.jsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const jsxFiles = getJSXFiles(componentsDir);

console.log(`Iniciando prueba de importación desde: ${componentsDir}\n`);

jsxFiles.forEach((file) => {
  try {
    require(file); // importamos el componente
    console.log(`✅ ${path.basename(file)}`);
  } catch (e) {
    console.error(`❌ ${path.basename(file)}: ${e.message}`);
  }
});

console.log('\nPrueba completa.');
