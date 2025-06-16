# ¿Por qué usamos un proyecto separado para los Design Tokens?

## Contexto

Los design tokens son variables que representan los estilos visuales fundamentales de nuestras aplicaciones (colores, tipografías, espaciados, etc.). Centralizar estos tokens en un repositorio independiente nos permite mantener la coherencia visual y facilitar la colaboración entre equipos y proyectos.

## Razones para esta decisión

- **Centralización:** Todos los proyectos consumen la misma fuente de la verdad para los estilos.
- **Consistencia:** Evitamos duplicidad y errores al mantener los tokens en un solo lugar.
- **Escalabilidad:** Facilita la actualización de estilos globales; los cambios se propagan a todos los proyectos dependientes.
- **Colaboración:** Permite que cualquier miembro del equipo proponga mejoras o cambios en los estilos base.
- **Reutilización:** Los tokens pueden ser usados en proyectos web, móviles, librerías internas, etc.
- **Mantenimiento:** Simplifica la gestión y el versionado de los estilos.

## Alternativas consideradas

- **Incluir los tokens en cada proyecto:** Esto genera inconsistencias y dificulta el mantenimiento.
- **Publicar en npm:** Es una opción válida, pero para nuestro flujo actual, consumir directamente desde un repositorio público es más ágil y sencillo.

---
