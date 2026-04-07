---
name: unit_testing_guidelines
description: Estrategia de pruebas obligatoria y prevención de fragilidad en Vanilla Frontend.
---

# Pruebas Unitarias y de Interfaz

1. **Ecosistema**: Dado que el entorno es Vanilla JS estático, el testeo puro sugeriría la incorporación futura de Frameworks Headless (Playwright, Cypress) o un Test Runner nativo de NodeJS (como el test runner de node `--test` o Jest).
2. **Si se requieren Unit Tests**: Si los scripts JS adquieren lógica funcional aislable (validadores, formateadores, data fetching puro) estas funciones deben testearse sin tocar el DOM o haciendo uso del pattern de Inyección de Dependencias.
3. **Pruebas UI E2E**: Serán la prioridad dado que la naturaleza del sistema es fungir como una Landing Page Visual. Estas pruebas validarán:
   - Carga correcta de SVG e imágenes.
   - Navegación y comportamiento responsivo (Navbar Collapse, etc.).
   - Visibilidad y funcionalidad de los Botones Clave (Calls to Action).
4. **Política de Mitigación de Fragilidad**:
   - Para evitar romper las pruebas con cada rediseño, no identifiques elementos en las pruebas automatizadas usando clases CSS (e.g., `.btn-primary`) o anclajes puramente visuales. Se deben emplear siempre selectores basados en atributos de prueba dedicados: `data-testid="mi-componente"`.
