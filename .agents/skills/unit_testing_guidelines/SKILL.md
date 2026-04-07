---
name: unit_testing_guidelines
description: Lineamientos estratégicos para la cobertura y mitigación de código frágil en Vanilla Frontend.
---
# Directrices de Testing en Vanilla JS

## Estrategia Obligatoria para Módulos
- Dado que nos enfrentamos a un proyecto exento de librerías en su arquitectura inicial y servido directo al cliente desde estáticos, el enfoque primordial va enfocado a la validación de manipulación de DOM, comportamientos de componentes manuales, y cálculos si estos ocurren por detrás.
- En caso de existir lógica intrincada asilada entre herramientas en `.js`, demandar integración unitaria asumiendo el rol activo mediante algún test runner nativo (o exigencia en la inyección e inicialización de **Jest** para Node).

## Reglas de Cobertura y Estructuras DOM
- Las validaciones funcionales deberán considerar primordialmente cada una de las mutaciones estructurales del DOM (elementos adjuntos o retirados, displays actualizados o asignaciones condicionales).
- No implementar pruebas frágiles; una aserción unitaria nunca debe fallar por culpa de una recategorización de clase estética (ej. un `.btn-primary` convertido en `.btn-accent`). Si vas a crear localizaciones con test, recurre ineludiblemente a atributos tipo `data-test-id="navbar-toggle"`.

## Evaluaciones Periódicas de Desempeño y Muestreos Visuales
- Dado su perfil tipo *Landing Page*, se integrarán políticas enfocadas a las auditorías visuales cross-browser y preventivas frente al comportamiento de estilización (prevenir las alteraciones imprevistas de Layout en Safari frente a Chromium, por ejemplo).
