---
name: ci_cd_pipeline
description: Infraestructura de automatización esperada según el ecosistema Netlify detectado.
---
# CI/CD y Pipeline de Despliegue

## Detección del Ecosistema
Acorde a los artefactos en la raíz, el proveedor de servicio y ecosistema CI/CD configurado para el repositorio es directamente **Netlify**, gestionado a través de su directiva y fichero `netlify.toml`.

## Fases y Automatización
Teniendo en cuenta que no existe el uso de dependencias o compilación/transpilación de Node en el árbol del proyecto, el despliegue obvia las rutinas de subida complejas y asume un publico de estáticos directo ("Publish ."). 
- **Fase de Build:** Totalmente omitida o nula en su infraestructura inicial. Todo activo en la raíz se envía de forma interpretada de golpe.
- **Flujos futuros de Prueba:** De existir la necesidad latente de pre-compilaciones, sanitizaciones o subrutinas de Tests a posterioridad, deberán configurarse inyectando herramientas en pre-commit con soporte, de tal forma que no subestimen al árbol maestro de la rama si la integridad no es correcta en su totalidad.

## Exigencias Periféricas
- Se exige que cualquier cabecera dinámica, personalización de estado HTTP para descarga de PDF's locales o gestión de almacenamiento de descargas se controlen dictatorialmente en `netlify.toml`.
- Todo tráfico perdido a raíz de refactorizaciones o endpoints que decaigan en `404` se redireccionarán estratégicamente a la raíz index.html o sus vistas subyacentes mientras se establecen rutas de prevención visual para el usuario humano.
