---
name: coffeecito_ui_css
description: Guía experta para implementar, modificar o hacer debug CSS en el proyecto Coffeecito respetando su sistema de diseño.
---

# Skill: Desarrollo y Estilos CSS en Coffeecito

## 1. Identificar el alcance de Diseño
Este proyecto requiere interfaces premium, altamente inmersivas. Todo nuevo elemento debe:
- Reflejar la paleta de colores de temática café (uso de marrones, moka claro, y fondos con contraste suave).
- Poseer interacciones agradables; asegúrate de definir el pseudo-selector `:hover` con transiciones (`transition: all 0.3s ease;`) en botones y tarjetas.

## 2. Sistema de Variables CSS (Tokens)
El manejo de los colores se realiza únicamente por medio de las variables de CSS.
- **Modo Oscuro**: Al editar secciones oscuras (ej. variables como `--color-surface-dark` u `--color-primary-dark`), verifica la legibilidad y contraste.
- **Unidad Monetaria**: Cuando agregues listados de precio recuerda el estándar de la plataforma de añadir el label `COP` tras el costo de forma consistente a lo largo del DOM. 

## 3. Resolución de Bugs y Adaptabilidad
- Si te topas con fallos de renderizado en **Safari** (como bloques blancos al animar o hacer zoom-in a imágenes): considera emplear reglas que fuercen la aceleración de hardware en esa capa, tales como:
  ```css
  transform: translateZ(0);
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
  ```
- **Diseño Responsivo**: Cuida de la apariencia en dispositivos móviles y de escritorio. El `navbar` ha tenido un rediseño que requiere verificaciones frecuentes en el punto de interrupción (breakpoint) de tablets (ej. `@media (max-width: 768px)`).

## 4. Recomendaciones Visuales
- Favorece el uso de iconos en formato **SVG** almacenados en el enrutamiento de imágenes/iconos en vez de utilizar emojis textualmente para un aspecto más profesional.
- Evita usar colores absolutos (ej. #FFFFFF puro, o colores estándar sin pensar). Emplea las definiciones variables.
