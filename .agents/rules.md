# Reglas de Proyecto: Coffeecito

## Selección de Modelos (LLM)
Es mandatorio utilizar la siguiente configuración de modelos según el contexto de la acción:

- **Para Planeación (Planning Mode)**: `Gemini 3.1 Pro`
- **Para Ejecución de Tareas (Task Execution)**: `Gemini Flash`

## Principios Básicos de Arquitectura
1. **Desarrollo Web Nativo**: Utilizar **HTML Semántico** para la estructura y **Vanilla CSS** para los estilos. No se debe introducir TailwindCSS ni pre-procesadores de CSS a menos que exista una indicación explícita del usuario.
2. **Sistema de Diseño (Tokens)**: El proyecto utiliza un sistema de tokens por medio de variables de CSS (ej. `--color-surface-dark`, `--_espresso`). Respeta la paleta cálida orientada a estilos de cafetería/arte.
3. **Calidad Premium y Animaciones**: Los estilos deben evocar un producto artesanal y de alta calidad. Aplica micro-animaciones en interacciones de los usuarios (hover states), y usa animaciones suaves con enfoque estético en los CTA (Call to Actions).
4. **Compatibilidad Multi-Navegador**: Las animaciones (particularmente los *hover* de la galería y flip cards) deben de diseñarse previniendo parpadeos (*flickering*) u otros bugs de renderizado del navegador **Safari**.
