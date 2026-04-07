---
name: ux_ui_architecture
description: Directrices y arquitectura de experiencia de usuario e interfaz para Coffeecito.
---

# Arquitectura UX/UI

Esta habilidad define cómo se deben diseñar e implementar los componentes visuales para garantizar una experiencia de usuario estéticamente impecable orientada a ventas premium.

## 1. Patrones de Diseño y Estructura
- **Jerarquía Visual y Whitespace**: Cada bloque de contenido (Hero, Galería, Precios) debe estar visualmente aislado con márgenes y "respiros" generosos para evitar saturación cognitiva.
- **Semántica HTML5**: Emplear adecuadamente elementos como `<main>`, `<section>`, `<article>`, o `<nav>` para agrupar jerárquicamente. 
- **Flujos de Usuario**: Las interacciones primarias deben destacar con botones llamativos (CTAs), evitando distractores (Ej. rediseño de "¿Cómo funciona?" a 4 pasos simples en lugar de exceso de texto).

## 2. Accesibilidad (a11y)
- **Uso de teclado y navegación**: Todos los CTAs interactivos, modales y galerías dinámicas deben funcionar navegando mediante la tecla `Tab` (`:focus`, `tabindex`).
- **Estados Visibles**: Añade estados coherentes para `:hover`, `:focus` y `:active` que usen nuestro sistema de tokens de color sin mimetizarse en los fondos de modo oscuro y modo claro.
- **Atributos de Soporte**: Agrega el atributo `alt` obligatorio a todas las imágenes e ilustraciones, y añade `aria-hidden="true"` en iconos decorativos (SVGs ornamentales).

## 3. Optimización para la Interfaz (Performance Percebido)
- Las imágenes pesadas de la galería y portafolio deben utilizar `loading="lazy"` para evitar bloqueos en la pinta inicial.
- Emplear animaciones que interactúen positivamente con la usabilidad sin sobrecargar el hardware (evitar animaciones abusivas; favorecer `opacity` o `transform`).
