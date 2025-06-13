# Decisiones de Diseño - RiskyID Design System

## Estructura del Proyecto

### 1. Enfoque de Implementación
- **Sistema Centralizado**: Los tokens de diseño se gestionan en un repositorio central para mantener la coherencia visual en todos los productos.
- **Tecnología Base**: Utilizamos Style Dictionary para la generación de tokens en múltiples formatos.

### 2. Organización de Tokens
- **Tokens Base**: Valores crudos (colores, tipografías, espaciados, etc.)
- **Tokens Semánticos**: Uso específico de los tokens base (ej: `color-primary`, `spacing-md`)
- **Componentes**: Estilos específicos para componentes reutilizables

### 3. Sistema de Temas
- **Tema por Defecto**: Se implementa un tema claro (light) como estándar.
- **Extensibilidad**: La arquitectura permite agregar temas adicionales (oscuro, alto contraste, etc.)

### 4. Convenciones de Nomenclatura
- **Variables SCSS**: Uso de guiones bajos para separar categorías (ej: `color_primary_500`)
- **Jerarquía Clara**: Los nombres reflejan la relación entre tokens (categoría > elemento > variante > estado)
