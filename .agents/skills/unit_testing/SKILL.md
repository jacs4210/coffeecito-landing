---
name: unit_testing
description: Estrategias de pruebas unitarias y DOM para garantizar que los despliegues a producción sean seguros y no presenten regresiones.
---

# Estrategias de Testing

Como el proyecto `10_landing_coffeecito` se basa en una arquitectura HTML plana y herramientas estáticas sin gestores de dependencias como npm, el abordaje de testing se diseña para no romper la experiencia en el navegador final.

## 1. Pruebas Funcionales al DOM Vanilla
- **Manejo de Eventos**: Cada vez que se desarrolle lógica pesada en JS (dentro de `index.html` o la carpeta `scripts/`), se debe probar las interacciones fundamentales de los elementos DOM reales.
- **Interacciones Críticas a Testear**: 
  - La apertura / cierre de modales y detalles en el abanico de ilustraciones.
  - Efectos visuales de Hover, Flip y transformaciones de visualización en Safari/Chrome de los Call to Action y precios.

## 2. Garantías Anti-regresión en Producción
- **Regla de Oro**: Ningún script ni código añadido al archivo `index.html` o los scripts de uso, debe lanzar excepciones no controladas en consola que puedan bloquear el hilo de ejecución de la vista final del cliente.
- Preferir pruebas "de humo" (Smoke testing) de flujos: Si hay un cambio de enlaces, hipervínculos `#`, o una alteración masiva en el diseño, confirmar que todo fluya correctamente y dirija de acuerdo al plan de la Landing Page.

## 3. Consideraciones de Compatibilidad Estricta
- Implementar validaciones que prueben las UI en los tamaños de pantalla más esenciales (Pantalla Móvil = 320-375px, Tablet = 768px, Escritorio). Todo lo visualizado en modo tablet en `styles/` no debe colapsar elementos de navegación.
