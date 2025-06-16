# Guía rápida: Importar y usar design tokens en Angular

## 1. Instala el design system como dependencia

Agrega el repositorio de tokens a tu proyecto Angular:

```
npm install git+https://github.com/tu-usuario/design-tokens.git
```

## 2. Importa el archivo SCSS de tokens

En tu archivo `styles.scss` (o el global de tu proyecto Angular), importa el archivo generado:

```scss
@import '~design-tokens/build/scss/tokens';
```

> Ajusta la ruta si tu estructura es diferente.

## 3. Usa las variables en tus estilos

Ahora puedes usar cualquier variable generada en tus archivos SCSS:

```scss
.button-primary {
  background: $color-m3_light-primary;
  color: $color-m3_light-on-primary;
  &:hover {
    background: $color-m3_light-state_hover;
  }
}
```

## 4. Actualiza los tokens

Cuando el design system se actualice:
- Ejecuta `npm update design-tokens` en tu proyecto Angular para obtener los últimos tokens.
- ¡Listo! Tus estilos estarán siempre alineados con el design system central.

---