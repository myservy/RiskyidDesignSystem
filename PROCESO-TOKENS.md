# Proceso de Gestión de Tokens

## 1. Configuración Inicial

### Requisitos Previos
- Node.js (v14 o superior)
- npm (v6 o superior)
- Style Dictionary (instalado localmente en el proyecto)

### Estructura de Directorios
```
RiskyidDesignSystem/
├── tokens/               # Archivos fuente de tokens
│   ├── colors.json       # Definiciones de colores
│   ├── typography.json   # Tipografías y estilos de texto
│   ├── spacing.json      # Espaciados y dimensiones
│   └── ...
├── dist/                # Archivos generados
│   ├── scss/             # Variables SCSS
│   └── css/              # Variables CSS
└── style-dictionary.config.js  # Configuración de Style Dictionary
```

## 2. Flujo de Trabajo

### Desarrollo Local
1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Generar tokens**
   ```bash
   npm run build
   ```
   Esto generará los archivos en el directorio `dist/`.

### Actualización de Tokens
1. Modifica los archivos en `tokens/` según sea necesario
2. Ejecuta `npm run build` para regenerar los archivos
3. Haz commit de los cambios en los archivos fuente y generados

## 3. Consumo en Proyectos

### Como Paquete NPM (Recomendado)
1. Publica el paquete en tu registro privado de npm
2. Instálalo en tu proyecto:
   ```bash
   npm install @riskyid/design-tokens
   ```
3. Importa los estilos en tu aplicación:
   ```scss
   @import '~@riskyid/design-tokens/dist/scss/tokens';
   ```

### Como Módulo Git (Alternativa)
1. Agrega el repositorio como dependencia:
   ```json
   "dependencies": {
     "@riskyid/design-tokens": "git+https://github.com/tu-usuario/riskyid-design-tokens.git"
   }
   ```

## 4. Actualización de la Versión de Sass

Si estás migrando de una versión anterior que usaba `@import`, sigue estos pasos:

1. Actualiza todas las importaciones para usar `@use` en lugar de `@import`
2. Asegúrate de que todos los archivos SCSS usen el namespace correcto (por defecto es el nombre del archivo)
3. Ejemplo de migración:

   ```scss
   // Antes (obsoleto)
   @import '~@riskyid/design-tokens/dist/scss/tokens';
   
   .mi-clase {
     color: $color-primary;
   }
   
   // Después (recomendado)
   @use '@riskyid/design-tokens/dist/scss' as token;
   
   .mi-clase {
     color: token.$color-primary;
   }
   ```

## 5. Mejores Prácticas

1. **Uso de namespaces**: Siempre usa namespaces explícitos para evitar colisiones
2. **Importación única**: Importa los tokens solo una vez en tu aplicación (generalmente en `styles.scss`)
3. **Variables CSS**: Para mejor rendimiento, considera convertir tokens a variables CSS cuando sea posible
4. **Documentación**: Mantén actualizada la documentación de tus tokens

## 6. Solución de Problemas

### Los estilos no se aplican
- Verifica que estés usando la sintaxis correcta de `@use`
- Asegúrate de que la ruta de importación sea correcta
- Verifica que hayas ejecutado `npm install` después de actualizar el paquete

### Variables no definidas
- Verifica que los nombres de las variables coincidan exactamente
- Asegúrate de que los tokens se hayan generado correctamente
- Verifica que estés usando el namespace correcto (ej: `token.$color-primary`)

## 4. Convenciones

### Nombrado de Tokens
- Usa nombres descriptivos en minúsculas con guiones bajos
- Sigue el patrón: `categoria_elemento_variante_estado`
- Ejemplo: `color_primary_500_hover`

### Estructura de Archivos
- Mantén tokens relacionados juntos
- Separa por categorías lógicas (colores, tipografía, espaciado, etc.)
- Documenta las decisiones de diseño en los archivos correspondientes
