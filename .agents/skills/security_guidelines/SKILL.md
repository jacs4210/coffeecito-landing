---
name: security_guidelines
description: Pautas de mitigación de vulnerabilidades adaptadas a Vanilla Frontend.
---

# Directrices de Seguridad Activa Front-End

Dado que se trata de un ecosistema que vive 100% en el entorno cliente (Navegador) y se exponen públicamente los assets de JavaScript o configuraciones de front_end:

1. **Cero Tolerancia a Secretos Embebidos (Secrets Hardcoding)**: 
   - Bajo ninguna circunstancia y por ninguna motivación técnica pueden dejarse dentro del código base tokens de API críticos, credenciales de Bases de Datos Directas, o configuraciones propietarias cerradas dentro de `scripts/` o el marcado HTML.

2. **Mitigación frente a Cross-Site Scripting (XSS)**: 
   - Precaución extrema al construir o pintar Nodos del DOM desde orígenes dinámicos si la landing se nutre alguna vez de APIs externas.
   - Evita las funciones inherentemente peligrosas: no utilices `element.innerHTML` sin validación previa y sanitización estricta. Intercambia las operaciones siempre que sea posible por `element.textContent`, `element.setAttribute`, o creación de clústeres mediante `document.createElement()`.

3. **Restricción y Orígenes (Cross-Origin)**:
   - Toda solicitud de origen (Fetch Call) requerirá un manejo de CORS robusto. Las inyecciones de iframes o la dependencia de librerías en CDN de terceros (`cdnjs`, `jsdelivr`, etc.) siempre deben declarar la firma íntegra de `integrity="sha384-..."` y `crossorigin="anonymous"` dentro del archivo base (`index.html`).
