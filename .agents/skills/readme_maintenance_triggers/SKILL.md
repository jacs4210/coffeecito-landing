---
name: readme_maintenance_triggers
description: Reglas de oro y disparadores (Triggers) de mantenibilidad obligatoria para preservar la documentación base actualizada a lo largo del tiempo.
---
# Reglas de Mantenimiento del README y Entorno

## Disparadores (Triggers) de Actualización
A partir de la ejecución de actividades bajo este entorno de trabajo, el Agente LLM tiene tajantemente prohibido silenciar los incrementos significativos o dejar en estado obsoleto de versión al fichero fundamental (El README.md del index de proyecto), debiéndose ejecutar mantenimientos bajo las siguientes condiciones de disolución:

- **Cambio Estructural Mayor:** Si introduces directrices arquitectónicas, subdirectorios base nuevos o carpetas modulares en la vista de JS, requerirán que justifiques para qué sirven su respectiva sección descriptiva en la doc.
- **Nuevas Convenciones:** Si tu tarea se asume en migrar un segmento de las convenciones Vanilla por algo como abstracciones de `SASS`, PostCSS o incluso se ancla un `npm run start` donde no existía, de manera estricta y perimetral, debes ser quien exponga estos flujos nuevos e instructivos dentro del README.
- **Integraciones Third-Party:** Al acoplar de forma persistente recursos tipo librerías (Analytics de datos en el Header, implementaciones del layout externo, etc.), deberán describirse y enunciar su alcance.
- **Despliegues o CDN (Netlify):** Reflejadas mutaciones perennes a la forma en que `netlify.toml` procesa los redireccionamientos o en los perfiles nativos de entorno del CDN.
