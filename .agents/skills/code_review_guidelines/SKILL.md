---
name: code_review_guidelines
description: Criterios estrictos a inspeccionar durante las revisiones de código y refactorizaciones en la Landing Page.
---

# Guía de Revisión de Código (Code Review)

Todo nuevo pedazo de código desarrollado de forma autónoma o manual debe someterse a esta checklist antes de asimilarse como completo.

## Checklist de Revisión de Estructura e Implementación

### 1. Limpieza de Archivos
- [ ] **CSS Huérfano**: Revisar minuciosamente que no queden fragmentos de clases no utilizadas al modificar elementos HTML.
- [ ] **Limpieza DOM**: ¿Existen etiquetas vacías o envolturas (`<div>` containers) redundantes que pudiesen removerse para optimizar la jerarquía semántica?

### 2. Estilos y CSS
- [ ] No hay propiedades de CSS `color` ni `background` introducidas "a la fuerza" (hard-coded). Todo debe derivar del entorno de variables del sistema (`var(--...)`).
- [ ] Prevención del Fallo en **Safari**: Confirmar la presencia de transformaciones GPU de seguridad (como `translateZ(0)`) donde existan animaciones 3D o de Hover sobre la galería.

### 3. SEO Básico para la Landing
- [ ] Mantenimiento del correcto árbol de encabezados; Asegurar que solo exista un único `<H1>` por rediseño de página.
- [ ] Cada hipervínculo <a> tiene un destino válido o bien `href="#..."` apropiado; sin dejar rastros de clics no funcionales o errores de enrutamiento a secciones inexistentes.

### 4. Modularidad y Buenas prácticas
- [ ] En lugar de inyectar códigos gigantescos de base64 o de SVGs complejos directamente en HTML, considerar si es más adecuado cargarlos de forma relativa para mantener la legibilidad de la vista.
