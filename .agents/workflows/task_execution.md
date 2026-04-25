---
description: Protocolo obligatorio que el agente debe seguir antes y durante la ejecución de cualquier tarea en este proyecto, sin excepción.
---

## Cuándo usar este workflow

Activar este workflow ante cualquiera de estos eventos:
- El usuario solicita implementar una nueva funcionalidad
- El usuario reporta un bug a corregir
- El usuario solicita un cambio visual o de contenido
- El usuario solicita modificar el pipeline CI/CD o la configuración de Netlify

---

## Protocolo de ejecución

### Paso 1 — Leer el contexto del proyecto

Leer el archivo `PROJECT_CONTEXT.md` completo en la raíz del repositorio antes de
cualquier otra acción. Extraer y tener presente durante toda la sesión:

- Stack tecnológico y restricciones técnicas conocidas
- Mapa de dependencias entre archivos
- Definition of Done de la sección afectada por la tarea
- Índice de skills disponibles

**Criterio de éxito:** El agente puede responder sin consultar nuevamente:
¿qué archivos se ven afectados por esta tarea? ¿qué restricciones aplican?

---

### Paso 2 — Identificar recursos del directorio `.agents`

Con base en la naturaleza de la tarea, identificar qué archivos del directorio
`.agents` aplican:

- **Skills** (`/skills`): ¿Cuál skill es relevante para esta tarea según el índice del PROJECT_CONTEXT?
- **Rules** (`/rules`): ¿Existe alguna regla que restrinja o condicione cómo debe abordarse?
- **Workflows** (`/workflows`): ¿Hay un workflow específico para este tipo de tarea además de este?

Si hay ambigüedad sobre qué recurso aplicar, ir al Paso 3 antes de continuar.

---

### Paso 3 — Resolver ambigüedades antes de planear

Si la tarea presenta alguno de estos casos, hacer las preguntas necesarias al usuario
**antes de crear el plan**:

- La tarea no tiene un Definition of Done definido en `PROJECT_CONTEXT.md`
- La tarea afecta una sección marcada como `[VERIFICAR]` o `[COMPLETAR]`
- La tarea involucra una integración externa con estado `⚠️ [VERIFICAR]`
- El alcance de la tarea no está claro (¿solo esta sección o también las dependientes?)

**Regla:** Es preferible hacer una pregunta incómoda ahora que generar un daño
que requiera múltiples iteraciones para revertir.

---

### Paso 4 — Crear plan atómico en Markdown

Generar un plan de implementación estructurado y presentarlo al usuario para
aprobación **antes de escribir cualquier línea de código**.

El plan debe tener este formato:

```markdown
## Plan de implementación: [nombre de la tarea]

**Sección afectada:** [nombre de la sección según PROJECT_CONTEXT]
**Skills activadas:** [lista de skills del índice que aplican]
**Archivos que se modificarán:** [lista según mapa de dependencias]
**Archivos a verificar como dependientes:** [lista según mapa de dependencias]

### Pasos de implementación

#### Paso 1 — [nombre descriptivo]
- Qué se hace: [descripción concreta]
- Archivo(s) afectado(s): [lista]
- Dependientes a verificar: [según mapa]
- Definition of Done de este paso: [criterio verificable]

#### Paso 2 — [nombre descriptivo]
- Qué se hace: [descripción concreta]
- Archivo(s) afectado(s): [lista]
- Dependientes a verificar: [según mapa]
- Definition of Done de este paso: [criterio verificable]

[...continuar por cada paso atómico]

### Criterios de éxito globales
- [ ] Todos los pasos completados sin errores de linter
- [ ] Definition of Done de la sección afectada verificado
- [ ] Ningún archivo dependiente roto
```

**No continuar al Paso 5 hasta recibir aprobación explícita del usuario.**
Si el usuario solicita cambios al plan, regenerarlo y volver a presentarlo.

---

### Paso 5 — Implementar paso a paso con verificación de dependencias

Ejecutar el plan aprobado siguiendo estrictamente este ciclo por cada paso:

```
Para cada paso del plan:
  1. Consultar el mapa de dependencias del archivo que se va a modificar
  2. Implementar el cambio en ese archivo
  3. Revisar visualmente que los archivos dependientes no fueron afectados
  4. Verificar el Definition of Done específico de ese paso
  5. Solo entonces avanzar al siguiente paso
```

**Regla crítica:** Si durante la implementación de un paso se detecta que el cambio
rompe un archivo dependiente, detener la ejecución, revertir el cambio y reportar
al usuario antes de continuar. No intentar arreglar el daño colateral sin informar.

---

### Paso 6 — Ejecutar verificaciones de calidad

Una vez completados todos los pasos del plan, ejecutar en orden:

```bash
# Verificación de calidad estática
npm run lint:html
npm run lint:css
npm run lint:js
```

Si algún linter reporta errores:
- Corregir únicamente los errores introducidos por los cambios de esta sesión
- No modificar código preexistente fuera del alcance del plan aprobado
- Si un error preexistente bloquea la ejecución, reportarlo al usuario

Luego verificar el **Definition of Done** de la sección afectada según
`PROJECT_CONTEXT.md`. Los criterios marcados como `[VERIFICAR MANUAL]` deben
ser listados en el informe para que el usuario los valide.

---

### Paso 7 — Generar informe técnico

Producir un informe en Markdown con esta estructura:

```markdown
## Informe de implementación: [nombre de la tarea]

**Fecha:** [fecha ISO]
**Sección afectada:** [nombre]
**Estado:** Completado / Completado con observaciones / Bloqueado

### Cambios realizados

| Archivo | Tipo de cambio | Descripción |
|---------|---------------|-------------|
| [archivo] | [Añadido / Modificado / Eliminado] | [qué se hizo y por qué] |

### Resultado de linters

- HTMLHint: [Sin errores / N errores — detalle]
- Stylelint: [Sin errores / N errores — detalle]
- ESLint: [Sin errores / N errores — detalle]

### Definition of Done — verificación

- [x] [criterio cumplido]
- [ ] [criterio pendiente — razón]
- [ ] [VERIFICAR MANUAL] [criterio que requiere validación humana]

### Observaciones técnicas

[Cualquier decisión de implementación que se apartó del plan original y por qué.
Deuda técnica identificada durante la implementación. Dependencias que requieren
atención futura.]

### Próximos pasos sugeridos

[Tareas que se identificaron como necesarias a partir de este cambio, si las hay.]
```

---

### Paso 8 — Esperar confirmación del usuario

Presentar el informe y **no realizar ninguna acción adicional** hasta que el usuario
indique una de estas opciones:

- ✅ **Aprobado**: La tarea está resuelta. Proceder a actualizar `CHANGELOG.md`
  usando la skill `changelog_maintenance`.
- 🔄 **Iterar**: El usuario indica qué no está correcto. Volver al Paso 3 con
  el contexto del problema específico reportado.
- ❌ **Revertir**: El usuario solicita deshacer los cambios. Revertir únicamente
  los archivos modificados en esta sesión.

---

## Reglas generales de este workflow

- **Nunca saltarse el Paso 4.** Ejecutar sin plan aprobado es la causa principal de daños.
- **Nunca modificar archivos fuera del alcance del plan aprobado**, aunque parezca
  una mejora obvia. Reportarlo como sugerencia en el informe.
- **Nunca asumir que un criterio `[VERIFICAR MANUAL]` está cumplido.** Siempre
  listarlo para el usuario.
- **El `CHANGELOG.md` solo se actualiza después de aprobación explícita** en el Paso 8.
