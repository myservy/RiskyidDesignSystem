# RiskyID Design System

Sistema de diseño basado en tokens para la plataforma RiskyID. Este repositorio contiene los tokens de diseño que definen la identidad visual de nuestras aplicaciones.

## 🚀 Características

- 🎨 Tokens de diseño centralizados
- 🛠️ Generación automática de variables CSS/SCSS
- 📦 Fácil integración con proyectos Angular
- 🔄 Actualizaciones consistentes en todos los proyectos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Generar tokens
npm run build
```

## 🏗️ Estructura del Proyecto

```
RiskyidDesignSystem/
├── tokens/               # Archivos fuente de tokens
│   ├── colors.json       # Definiciones de colores
│   ├── typography.json   # Tipografías y estilos de texto
│   └── spacing.json      # Espaciados y dimensiones
├── dist/                 # Archivos generados
│   ├── scss/             # Variables SCSS
│   │   ├── _tokens.scss # Variables generadas
│   │   └── index.scss   # Punto de entrada principal
│   └── css/              # Variables CSS
└── style-dictionary.config.js  # Configuración
```

## 📚 Documentación

- [Guía de Uso con Angular](./USO-ANGULAR.md)
- [Proceso de Gestión de Tokens](./PROCESO-TOKENS.md)
- [Decisiones de Diseño](./DECISIONES-DISENO.md)

## 🔄 Actualización de Tokens

1. Modifica los archivos en `tokens/` según sea necesario
2. Ejecuta `npm run build` para regenerar los archivos
3. Haz commit de los cambios en los archivos fuente y generados
4. Publica una nueva versión del paquete si es necesario

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
