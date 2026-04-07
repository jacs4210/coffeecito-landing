---
name: ui_ux_architecture
description: Lineamientos estéticos y de arquitectura CSS/DOM para el proyecto Vanilla Frontend.
---

# UI/UX & CSS Architecture Guidelines

Como arquitecto de Frontend asumiendo un ecosistema puramente Vanilla (HTML, CSS y JS), debes aplicar estos mandamientos de UI/UX y estandarización visual.

## 1. Sistema de Tokens y Variables CSS
Todas las dimensiones, espacios, tipografías y colores **deben** estar declarados como Custom Properties (`--variable`) en la pseudoclase `:root`. No se permite la interpolación de colores arbitrarios o *hardcodeados* (los "magic numbers").
- Usa prefijos si es pertinente: `--sm-spacing-1`, `--color-primary-base`, `--font-main`.
- Ejemplo de colores existentes definidos en la Landing: `--color-surface-dark`, `--color-primary-dark`.

## 2. Jerarquía Visual y Responsividad
- Construye las interfaces usando la estrategia "Mobile-First".
- Todo esquema de "grilla" debe lograrse con CSS Grid para disposición macro de layouts y Flexbox para componentes de una dimensión o micro-alineaciones.
- Los "Breakpoints" deben alinearse a convenciones (e.g. tablet `768px`, desktop `1024px`) controlados por media queries y variables de umbral si es posible.

## 3. Accesibilidad (a11y)
- Obligatorio validar relación de contraste (WCAG 2.1 AA mínimo).
- Proveer semántica estricta de HTML5 (uso de etiquetas `<header>`, `<main>`, `<article>`, `<section>`, y `<footer>`).
- Todos los elementos iterables o botones de CTA requerirán atributos `aria-label` o equivalentes cuando su semántica textual no sea suficientemente descriptiva para los Screen Readers.

## 4. Animaciones y Micro-interacciones
- En vez de usar JS masivo, prefiere CSS Transitions y Animations para cambios de estado (hover, focus, active).
- Limita la carga computacional; usa `transform` y `opacity` preferiblemente para que opere la aceleración por hardware de los navegadores modernos y evitar recálculos excesivos en el layout de pintura (Reflow/Repaint).
