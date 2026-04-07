---
name: ui_ux_architecture
description: Lineamientos estéticos, jerarquía visual y arquitectura de experiencia en entornos puramente Vanilla de Frontend.
---
# Arquitectura UI/UX y Lineamientos Estéticos

Para compensar la carencia de frameworks prearmados e implementar una experiencia digital excepcional, moderna y escalable directamente desde Vanilla, asume los siguientes pilares de arquitectura:

## Sistema de Tokens CSS
- Utilizar variables CSS nativas vinculadas en pseudoclase (`:root`) dentro del sistema principal (`styles/` si aplica) dictadas como la única fuente de la verdad para el Design System.
- Aplicar convenciones de nomenclatura robustas y semánticas, jamás abstractas. E.g., utilizar `--color-primary-dark`, `--color-surface`, `--font-heading`, `--spacing-xs`.
- Prohibición sistemática del "Hardcoding" generalizado de hexagesimales u opacidades; cada color, dimensión o timing de micro-interacción debe corresponder a un token unificado.

## Jerarquía Visual y Layout
- Establecer un paradigma estricto de desarrollo "Mobile First". Toda alineación e instancia debe funcionar impecablemente en pantallas responsivas. 
- Usar de preferencia CSS Grid bidimensional para secciones modulares complejas y Flexbox para componentes en distribución simple/unidimensional.
- Perseguir incansablemente la limpieza visual, el uso agresivo e inteligente del espacio en blanco (`whitespace/gap`), alineamiento absoluto y jerarquía tipográfica para garantizar un aspecto *Premium* al visitante.

## Accesibilidad (A11y)
- Empoderar una semántica rigurosa del árbol de elementos HTML5. Evitar la "Divitis" usando componentes orgánicos estructurales (`<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`).
- Cumplimiento de interacciones sin texto: Para componentes, iconografía, o botones visuales mudos, adjuntar incondicionalmente atributos suplementarios `aria-label`.
- Cada inyección o uso de elemento imagen (`<img>`) asume la obligación de un atributo `alt` claro y descriptivo para lectores.

## Arquitectura de Microinteracciones
- Entregar sensación viva o "dinámica" constante en la interfaz de usuario implementando animaciones microscópicas elegantes usando `transition` de CSS o `keyframes`. 
- Cuidar los estados de los elementos interactivos (`:hover`, `:focus`, `:active`) permitiendo una fluidez moderna sin impactar en las métricas esenciales y técnicas del DOM.
