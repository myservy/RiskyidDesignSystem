# RiskyID Design System

Sistema de diseño modular para Angular que utiliza Style Dictionary para la generación de tokens de diseño.

## Estructura del Proyecto

```
RiskyidDesignSystem/
├── dist/                    # Archivos generados
│   ├── scss/               # Variables SCSS
│   └── css/                # Variables CSS
├── tokens/                 # Fuente de los tokens
│   └── colors.json         # Tokens de colores
├── config.js               # Configuración de Style Dictionary
└── package.json            # Dependencias y scripts
```

## Configuración Inicial

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Generar archivos de tokens:
   ```bash
   npm run build
   ```

## Uso en un Proyecto Angular

### 1. Agregar como submódulo Git

```bash
# En el directorio de tu proyecto principal
git submodule add [URL_DEL_REPOSITORIO] src/app/shared/design-system
```

### 2. Configurar los estilos en Angular

1. En tu archivo `angular.json`, asegúrate de incluir los estilos:

```json
"styles": [
  "src/styles.scss",
  "src/app/shared/design-system/dist/scss/_tokens.scss"
],
```

2. O importa los estilos en tu archivo `styles.scss` principal usando `@use`:

```scss
// Configuración de rutas para los módulos
$use-relative-paths: true;

// Importar variables del sistema de diseño
@use 'app/shared/design-system/dist/scss/tokens' as *;

// Usar las variables
body {
  background-color: $color-background;
  color: $color-on-background;
  font-family: $font-family-base;
}

// Componentes que usan los tokens
.button-primary {
  background-color: $color-primary;
  color: $color-on-primary;
  border: none;
  padding: $spacing-2 $spacing-4;
  border-radius: $border-radius-md;
}
```

### 3. Actualizar los tokens

1. Realiza cambios en los archivos dentro de la carpeta `tokens/`
2. Reconstruye los archivos:
   ```bash
   cd src/app/shared/design-system
   npm run build
   ```
3. Los cambios se reflejarán automáticamente en tu proyecto principal

## Convenciones

- **Colores**: Usar nombres semánticos (primary, secondary, error, etc.)
- **Tipografía**: Usar escalas (text-sm, text-base, text-lg, etc.)
- **Espaciado**: Usar la escala 4px (4px = 1 unidad)
- **Bordes**: Usar radios consistentes (none, sm, md, lg, full)

## Desarrollo

Para desarrollo local con recarga automática:

```bash
npm run watch
```

## Estructura de Tokens

- `colors.json`: Paleta de colores y temas
- `typography.json`: Tipografía y escalas tipográficas
- `spacing.json`: Sistema de espaciado
- `border.json`: Radios de borde y anchos

## Contribución

1. Crear una rama para la nueva característica
2. Realizar los cambios en los tokens
3. Verificar que los estilos se generen correctamente
4. Enviar un pull request

## Licencia

Este proyecto está bajo la licencia ISC.
