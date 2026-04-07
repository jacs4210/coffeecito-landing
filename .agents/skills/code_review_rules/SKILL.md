---
name: code_review_rules
description: Protocolo estricto de Code Review, formateo y mitigación de deuda técnica.
---

# Code Review Ruleset

Reglas inquebrantables de validación antes de integrar código:

## Limpieza e Integridad de Código
- **Cero Objetos u Oyentes Huérfanos**: Todo controlador de eventos agregado dinámicamente (`addEventListener`) debe integrarse considerando su destrucción controlada (`removeEventListener`) en caso de manipulación de DOM compleja, evitando Fugas de Memoria (Memory Leaks).
- **Mitigación de Deuda Técnica**: No introduzcas comentarios muertos del tipo `// código aquí después`. Si hay una omisión temporal, debe rotularse con `TODO: [descripción explícita]`. Si un bloque de código fue reemplazado y es residual, SE DEBE ELIMINAR por completo.
- **Formateo**: Alineación al estándar configurado. Preferir indentación de 2 espacios. Archivos HTML deben estar limpios con indentación correcta de anidación. Los scripts de JavaScript utilizarán Camel Case para Variables/Funciones.

## Evaluación Estática sobre CSS y HTML:
- **HTML**: Validar inexistencia total de atributos `id="..."` duplicados dentro de la vista compilada, lo cual arruina la semántica y rompe interactuadores DOM / a11y.
- **CSS**: Prevención de selectores altamente específicos. Emplear selectores lógicos (clases compuestas) minimizando la profundidad de anidación superior a tres capas limitando a su vez el uso excesivo de `!important` y selectores de bloque por `#id` en favor de estandarización por variables y componentes visuales reutilizables.
