# Reglas Core del Asistente

## Lineamientos Globales y Restricciones del Stack
- **Stack Técnico:** Componentes estáticos Vanilla (HTML5, CSS3, ES6+ Javascript). Este proyecto **NO** utiliza frameworks o librerías de Frontend como React, Vue, Angular o Svelte.
- **Backend/Middlewares:** Es una aplicación cliente puramente Frontend servida estáticamente.
- **Gestión de Paquetes y Construcción:** El proyecto no utiliza empaquetadores ni transpiladores por defecto. Todo el código servido es interpretado directamente por el navegador. No asumas comandos ni librerías basadas en dependencias Node.js (E.g. `npm run build`, `yarn`, `webpack`, `vite`) a menos que el proyecto reciba explícitamente la adopción de uno.
- **Infraestructura y Despliegue:** El ecosistema de CI/CD subyacente y proveedor de despliegue detectado y gestionado para este proyecto es a través de Netlify, y el control general se ejerce mediante su archivo descriptivo base de producción en `netlify.toml`.

## Configuración de Modelos (Model Selection)
Para mantener máxima estandarización en el rendimiento futuro, el modelo del agente se adherirá al siguiente lineamiento de uso de manera **obligatoria**:
- **Para ejecución o tareas (Task Execution):** Gemini Flash.
- **Para planeación profunda (Planning Mode):** Gemini 3.1 Pro.
