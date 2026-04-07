---
name: ci_cd_pipeline
description: Ecosistema y reglas de Despliegue CI/CD para el proyecto.
---

# Automatización y Ecosistema de Despliegue

De acuerdo al reconocimiento estructural del proyecto, este ecosistema está alojado bajo CI/CD pasivo impulsado externamente por integración Git, presentando la siguiente característica fundamental:

## Pila CI/CD Destinada: Netlify

- **Configuración Detectada**: El pipeline de red está regido nativamente por `netlify.toml`, presente en la raíz del repositorio.
- El ciclo de despliegue principal es gatillado por pushes sobre la rama activa principal (main/master).
  
## Estándares de CI/CD del Repositorio:
- **Fase de Construcción (Build Phase)**: Al ser un proyecto de Vanilla sin empaquetadores como Webpack ni dependencias NPM complejas, usa publicación directa. En Netlify, el directorio asume el proyecto root (`publish = "."` o similar) sin correr scripts de generación preliminares en caso de no estar estrictamente definidos.
- **Redirects y Cabeceras (Headers)**: A nivel CI son administradas directamente a través del archivo `netlify.toml` (Ejemplo: reglas de descarga para `/assets/pdf/*` y reescritura hacia `/index.html`).

## Evolución de Tareas en CI
- Toda mutación tecnológica obligatoria o incursión a transpiladores de código o post-procesadores de CSS en el futuro debe imperativamente reflejarse en las reglas dentro del objeto `[build]` (`command=""`) integrándose limpiamente con la ejecución de Netlify.
