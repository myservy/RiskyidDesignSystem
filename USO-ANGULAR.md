# Integración con Angular

## 1. Instalación

### Opción 1: Instalación como Paquete NPM (Recomendado)

1. Instala el paquete de tokens en tu proyecto Angular:
   ```bash
   npm install @riskyid/design-tokens
   ```

2. Importa los estilos en tu `styles.scss` global:
   ```scss
   // styles.scss
   @import '~@riskyid/design-tokens/dist/scss/tokens';
   ```

### Opción 2: Uso Directo desde el Repositorio

1. Copia el contenido de la carpeta `dist/scss/` a la carpeta `assets/styles/` de tu proyecto Angular.

2. Importa los estilos en tu `styles.scss`:
   ```scss
   // styles.scss
   @import './assets/styles/tokens';
   ```

## 2. Uso en Componentes

### En Archivos SCSS de Componentes

```scss
// componente-example.component.scss
@use 'sass:map';
@use '@angular/material' as mat;
@use 'src/styles' as *; // Ajusta la ruta según tu estructura de proyecto

:host {
  // Uso directo de variables
  background-color: token.$color-background-default;
  color: token.$color-text-primary;
  padding: token.$spacing-medium;

  // Estados interactivos
  &:hover {
    background-color: token.$color-primary-hover;
  }

  // Uso con Material theming
  .mat-button {
    background-color: token.$color-primary-500;
    color: token.$color-on-primary;
  }
}
```

### En Archivos TypeScript

```typescript
// componente-example.component.ts
import { Component } from '@angular/core';

export const TOKENS = {
  colors: {
    primary: 'var(--color-primary-500)',
    background: 'var(--color-background-default)'
  },
  spacing: {
    small: 'var(--spacing-small)',
    medium: 'var(--spacing-medium)'
  }
} as const;

@Component({
  selector: 'app-componente-example',
  template: `
    <div [ngStyle]="{'background-color': TOKENS.colors.background}">
      <button [style.margin]="TOKENS.spacing.medium">
        Botón de ejemplo
      </button>
    </div>
  `
})
export class ComponenteExampleComponent {
  TOKENS = TOKENS;
}
```

## 3. Integración con Material Design 3 (Material You)

Material Design 3 (también conocido como Material You) introduce un nuevo sistema de diseño más personalizable y expresivo. Esta sección explica cómo integrar nuestros tokens con Angular Material 3.

### Configuración Inicial

1. Asegúrate de tener la versión más reciente de Angular Material con soporte para Material 3:
   ```bash
   ng add @angular/material@next
   ```

2. Instala las dependencias necesarias para Material 3:
   ```bash
   npm install @angular/cdk@next @angular/material@next
   ```

### Configuración del Tema

Crea un archivo `src/theme/material-theme.scss` con la siguiente configuración:

```scss
// Importa los tokens de diseño
@use '~@riskyid/design-tokens/dist/scss' as token;
@use '@angular/material' as mat;

// Configuración del tema claro
$light-theme: mat.define-theme(extend(
  mat.define-theme((
    color: (
      theme-type: light,
      primary: mat.$azure-palette,
      secondary: mat.$blue-palette,
      tertiary: mat.$cyan-palette,
      error: mat.$red-palette,
    ),
    typography: (
      brand-family: 'Roboto',
      plain-family: 'Roboto',
    ),
    density: (
      scale: 0
    )
  )),
  color: (
    primary: token.$color-primary-500,
    on-primary: token.$color-on-primary,
    primary-container: token.$color-primary-container,
    on-primary-container: token.$color-on-primary-container,
    // Agrega más mapeos según sea necesario
  )
));

// Configuración del tema oscuro (opcional)
$dark-theme: mat.define-theme(extend(
  mat.define-theme((
    color: (
      theme-type: dark,
      primary: mat.$azure-palette,
      secondary: mat.$blue-palette,
      tertiary: mat.$cyan-palette,
      error: mat.$red-palette,
    )
  )),
  color: (
    primary: token.$color-primary-200, // Más claro para modo oscuro
    on-primary: token.$color-on-primary-dark,
    primary-container: token.$color-primary-container-dark,
    on-primary-container: token.$color-on-primary-container-dark,
  )
));

// Aplicar el tema claro por defecto
@include mat.all-component-themes($light-theme);

// Clase para tema oscuro
.dark-theme {
  @include mat.all-component-colors($dark-theme);
}
```

### Uso de Componentes con Material 3

Los componentes de Angular Material 3 ahora usarán automáticamente los estilos definidos. Aquí hay algunos ejemplos:

```html
<!-- Botón con elevación -->
<button mat-raised-button color="primary">Primary</button>

<!-- Tarjeta con esquinas redondeadas -->
<mat-card appearance="elevated">
  <mat-card-header>
    <mat-card-title>Tarjeta con Material 3</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    Contenido con esquinas redondeadas según Material 3
  </mat-card-content>
</mat-card>

<!-- Campo de formulario -->
<mat-form-field appearance="fill">
  <mat-label>Campo de texto</mat-label>
  <input matInput placeholder="Escribe algo...">
</mat-form-field>
```

### Personalización Avanzada

Puedes personalizar aún más los componentes sobrescribiendo las variables de CSS de Material 3:

```scss
// En tu archivo styles.scss
:root {
  // Personalización de campos de formulario
  --mdc-filled-text-field-container-color: #{token.$color-surface-container-highest};
  --mdc-filled-text-field-label-text-color: #{token.$color-on-surface-variant};
  --mdc-filled-text-field-input-text-color: #{token.$color-on-surface};
  
  // Personalización de botones
  --mdc-filled-button-container-color: #{token.$color-primary};
  --mdc-filled-button-label-text-color: #{token.$color-on-primary};
  
  // Personalización de tarjetas
  --mdc-elevated-card-container-elevation: #{token.$elevation-1};
  --mdc-elevated-card-container-shadow-color: #{token.$color-shadow};
}

// Tema oscuro
.dark-theme {
  --mdc-filled-text-field-container-color: #{token.$color-surface-container-highest-dark};
  --mdc-filled-text-field-label-text-color: #{token.$color-on-surface-variant-dark};
  // ... otras personalizaciones para tema oscuro
}
```

### Soporte para Temas Dinámicos

Para cambiar entre temas claro y oscuro dinámicamente:

1. Agrega este servicio en tu aplicación:

```typescript
// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme', this.darkMode);
  }
}
```

2. Agrega un botón para cambiar de tema en tu componente:

```html
<button mat-icon-button (click)="toggleTheme()">
  <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
</button>
```

```typescript
// En tu componente
export class AppComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme();
  }
}
```

### Consideraciones de Accesibilidad

Material Design 3 incluye mejoras de accesibilidad. Asegúrate de:

1. Mantener un contraste adecuado entre texto y fondo
2. Usar las paletas de colores accesibles proporcionadas
3. Probar con herramientas como Lighthouse y axe DevTools
4. Implementar navegación por teclado y soporte para lectores de pantalla

### Recursos Adicionales

- [Documentación oficial de Material Design 3](https://m3.material.io/)
- [Guía de Angular Material 3](https://material.angular.io/guide/theming)
- [Herramienta de generación de temas](https://material-foundation.github.io/material-theme-builder/)

## 4. Mejores Prácticas

1. **Variables CSS Personalizadas**
   - Usa `:root` para definir variables CSS personalizadas basadas en tus tokens
   - Ejemplo:
     ```scss
     :root {
       --header-height: #{$size-header-height};
       --sidebar-width: #{$size-sidebar-width};
     }
     ```

2. **Mixins para Componentes Comunes**
   - Crea mixins para estilos reutilizables
   - Ejemplo:
     ```scss
     @mixin card-styles {
       border-radius: $border-radius-medium;
       box-shadow: $shadow-small;
       background-color: $color-surface-default;
       padding: $spacing-medium;
     }
     ```

3. **Responsive Design**
   - Usa los tokens de breakpoint para diseño responsive
   - Ejemplo:
     ```scss
     .responsive-container {
       padding: $spacing-medium;
       
       @media (min-width: $breakpoint-tablet) {
         padding: $spacing-large;
       }
     }
     ```

## 5. Solución de Problemas Comunes

### Los estilos no se aplican
- Verifica que el archivo `styles.scss` esté correctamente importado en `angular.json`
- Asegúrate de que las rutas de importación sean correctas

### Variables no definidas
- Verifica que el nombre de la variable coincida exactamente con la definida en los tokens
- Asegúrate de que los archivos de tokens se hayan generado correctamente

### Problemas con Material Theming
- Verifica que los temas de Material se estén importando antes que tus estilos personalizados
- Asegúrate de que las variables de tema de Material no estén siendo sobrescritas
