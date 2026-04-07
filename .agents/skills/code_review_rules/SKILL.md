---
name: code_review_rules
description: Checklist y estándares inflexibles de Code Review y mantenimiento del control de calidad y memoria.
---
# Code Review y Calidad de Código 

En todas las iteraciones o aportes entregados por el agente de forma automática se mantendrá una estricta rigurosidad basada en el control preventivo y el perfeccionamiento continuo mediante los siguientes criterios obligatorios:

## Mitigación de Deuda Técnica y Optimización del DOM
- **Control de Memoria:** Al momento de agregar manipulaciones al DOM (`Event Listeners`), debe ser de carácter sumamente obligatorio planear la delegación pasiva de eventos para la prevención y eliminación inmutable de "Memory Leaks" en los módulos de renderizado interactivo u objetos fantasmas/huérfanos. Si un nodo es retirado dinámicamente, su escucha debe removerse.
- **Evitar Acoplamiento Estructural (The CSS Nightmare):** Se prohíbe explícitamente generar cadenas destructivas de selección muy específicas o frágiles dentro de las secuencias modulares o globales, tales como `div > .container > p > span:nth-child(2)`. Siempre que sea posible, utilizar clases utilidad discretas o nombres semánticos planos.

## Limpieza de Código y Consistencia
- A falta de un formateador de entorno estricto instalado (E.g. Prettier via npm scripts), se impone fuertemente mantener de forma explícita toda indentación heredada natural, erradicando a plenitud `trailing whitespaces`.
- Las tabulaciones persistirán uniformes bajo indentaciones estrictamente a 2 o 4 celdas dependiendo de la coherencia del documento.
- Asegurar de forma absoluta la limpieza de clases CSS inutilizadas generadas durante borradores, eliminar cualquier recurso visual (`<img>`, `<video>`, `.svg`) residual que no pertenezca explícitamente al árbol actual de renders HTML.
