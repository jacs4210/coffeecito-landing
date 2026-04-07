---
name: github_actions_ci_cd
description: Arquitectura estructural para el futuro pipeline de despliegue continuo (CI/CD) en la red enfocado en el proyecto estático.
---

# Arquitectura de Repositorio y CI/CD (GitHub Actions)

La infraestructura real de este proyecto (`10_landing_coffeecito`) no cuenta con dependencias complejas (como de node y webpack), pero cuenta con un archivo base `netlify.toml`. La automatización orientará el flujo en preservar su naturaleza de sitio estático rápido.

## Fases de Integración Continua (CI)
Todo `Pull Request` apuntando hacia ramas principales se verá sujeto a validaciones que no exijan compilación de librerías extrañas:

1. **Gate de Estándares (Linting Básico)**:
   - Validar que las contribuciones HTML en `index.html` sean sintácticamente correctas.
   - Revisión de código donde no existan hipervínculos (`href`) rotos o rutas a imágenes `/assets/` que arrojen un HTTP 404.
2. **Compatibilidad Multi-plataforma**:
   - Garantizar que los flujos básicos mantengan su soporte y no entorpezcan los flujos responsivos o interacciones del usuario en el navegador final.

## Fases de Despliegue Continuo (CD)
Una vez que el código haya sido validado (Merge):

1. **Despliegue a producción de Contenido Estático**:
   - Los pipelines o integraciones continuas leerán la configuración de red y cabeceras dentro del `netlify.toml` para publicarlo todo de un golpe (como si tratase de *Drag & Drop* inteligente a un host estandarizado). No hay fase de "Vite/Build" que ralentice el CI.
   
## Pasos de Implementación de Arquitectura a Futuro
- [ ] Mantener configurado únicamente `netlify.toml` a menos que se cambie radicalmente el rumbo tecnológico.
- [ ] Creación de archivos YAML de automatizaciones en la carpeta de sistema (`.github/workflows/validate.yml` y `.github/workflows/deploy.yml`) para ejecutar flujos estáticos puros.
