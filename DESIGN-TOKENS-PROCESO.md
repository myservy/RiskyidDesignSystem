# Proceso de gestión y uso de Design Tokens

## 1. Creación y actualización de tokens

1. **Exportar tokens desde Figma:**  
   Usamos plugins como Figma Tokens para exportar los estilos a un archivo `.json`.

2. **Agregar los tokens al repositorio:**  
   Subimos el archivo exportado (`DSTest.json`) al repositorio de design tokens.

3. **Convertir el JSON a formato Style Dictionary:**  
   Ejecutamos el script de conversión:
   ```
   node convertDSTest.js
   ```
   Esto genera `tokens-style-dictionary.json` con los temas y state layers listos para Style Dictionary.

4. **Generar archivos SCSS con Style Dictionary:**  
   Ejecutamos:
   ```
   npx style-dictionary build --config style-dictionary.config.js
   ```
   Esto genera el archivo `build/scss/_tokens.scss` con todas las variables SCSS.

## 2. Consumo en otros proyectos

- Agregamos el repositorio de design tokens como dependencia en el proyecto consumidor (por ejemplo, usando npm con la URL de GitHub):
  ```
  npm install git+https://github.com/tu-usuario/design-tokens.git
  ```
- Importamos el archivo SCSS generado en los estilos globales o de componentes del proyecto consumidor.

## 3. Actualización y mantenimiento

1. **Actualizar tokens en Figma:**  
   Cuando hay cambios en los estilos, exportamos nuevamente el archivo `.json`.

2. **Actualizar el repositorio:**  
   Subimos el nuevo archivo y repetimos el proceso de conversión y generación de SCSS.

3. **Actualizar los proyectos consumidores:**  
   En cada proyecto que use los tokens, actualizamos la dependencia para obtener los últimos cambios.

## 4. Buenas prácticas

- Usar ramas y pull requests para proponer cambios.
- Versionar los cambios importantes usando tags o releases en el repositorio.
- Documentar los cambios relevantes en el repositorio de tokens.
# Proceso de gestión y uso de Design Tokens

...existing code...

## 5. Consideraciones importantes sobre estados (state layers)

### Manejo de estados interactivos (hover, focus, pressed)

Los **state layers** exportados desde Figma y procesados por Style Dictionary representan los colores y transparencias para los diferentes estados de interacción de los componentes (por ejemplo: hover, focus, pressed).

- **Hover:** Corresponde a la variable con sufijo `opacity_08` (8% de opacidad).
- **Focus:** Corresponde a la variable con sufijo `opacity_12` (12% de opacidad).
- **Pressed:** Corresponde a la variable con sufijo `opacity_16` (16% de opacidad).

Estas variables se generan automáticamente y puedes usarlas así en tus estilos SCSS:

```scss
.button {
  background: $color-m3_light-primary;
  &:hover {
    background: $color-m3_light-state_primary-opacity_08;
  }
  &:focus {
    background: $color-m3_light-state_primary-opacity_12;
  }
  &:active {
    background: $color-m3_light-state_primary-opacity_16;
  }
}
```

> **Nota:** Los nombres pueden variar según el tema y el color base. Consulta el archivo `_tokens.scss` generado para ver todos los nombres disponibles.

**Recomendación:**  
Siempre utiliza los tokens de estado para mantener la coherencia visual y cumplir con las guías de diseño de Material Design u otros sistemas.

---
# Proceso de gestión y uso de Design Tokens

...existing code...

## 5. Consideraciones importantes sobre estados (state layers)

### Manejo de estados interactivos (hover, focus, pressed)

Los **state layers** exportados desde Figma y procesados por Style Dictionary representan los colores y transparencias para los diferentes estados de interacción de los componentes (por ejemplo: hover, focus, pressed).

- **Hover:** Corresponde a la variable con sufijo `opacity_08` (8% de opacidad).
- **Focus:** Corresponde a la variable con sufijo `opacity_12` (12% de opacidad).
- **Pressed:** Corresponde a la variable con sufijo `opacity_16` (16% de opacidad).

Estas variables se generan automáticamente y puedes usarlas así en tus estilos SCSS:

```scss
.button {
  background: $color-m3_light-primary;
  &:hover {
    background: $color-m3_light-state_primary-opacity_08;
  }
  &:focus {
    background: $color-m3_light-state_primary-opacity_12;
  }
  &:active {
    background: $color-m3_light-state_primary-opacity_16;
  }
}
```

> **Nota:** Los nombres pueden variar según el tema y el color base. Consulta el archivo `_tokens.scss` generado para ver todos los nombres disponibles.

**Recomendación:**  
Siempre utiliza los tokens de estado para mantener la coherencia visual y cumplir con las guías de diseño de Material Design u otros sistemas.

---
