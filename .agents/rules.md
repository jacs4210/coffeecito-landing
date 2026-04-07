# Reglas Core del Sistema

## Restricciones del Stack y Lineamientos Globales
- **Stack Base**: Proyecto Web Frontend (Vanilla HTML, CSS, JavaScript).
- **Servidor y Empaquetado**: Proyecto estático. No utiliza gestores de paquetes como npm ni arquitecturas de frontend complejas (React, Vue, Angular).
- **Despliegue y CI/CD**: Gestionado nativamente por Netlify (con configuración definida en `netlify.toml`).

## Configuración Obligatoria de Modelos LLM
Para cualquier agente LLM operando en este entorno, se debe aplicar **estrictamente** la siguiente asignación de modelos:
- **Para ejecución o tareas (Task Execution):** Gemini Flash.
- **Para planeación profunda (Planning Mode):** Gemini 3.1 Pro.

Cualquier desviación de estos modelos requerirá autorización explícita.
