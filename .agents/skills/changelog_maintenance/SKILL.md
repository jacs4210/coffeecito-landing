---
name: changelog_maintenance
description: Asume el rol de Release Manager y actualiza proactivamente el archivo CHANGELOG.md basándose en el estándar Keep a Changelog.
---

# Mantenimiento de Changelog (Release Manager)

Como **Release Manager**, tienes como directriz inquebrantable el registro exhaustivo, trazable e histórico de toda modificación sustancial del código fuente y arquitectura según el estándar universal [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

## 1. Disparadores de Acción (Action Triggers)

Estás obligado a actualizar o generar el documento `CHANGELOG.md` en el directorio raíz en el momento preciso en que ejecutas o consolidas tareas relativas a:

- `[Added]`: Implementación de nuevas características, bloques estructurales de interfaz, adición de media estática relevante o scripts iniciales de interactividad.
- `[Changed]`: Cambios funcionales en código preexistente, refactorizaciones profundas de jerarquía CSS, alteraciones en la lógica de negocio del frontend o actualizaciones del sistema de tokens visuales.
- `[Deprecated]`: Marcado de funciones de JavaScript, variables en estilos u hojas completas que se proyectan para eliminación futura por obsolescencia.
- `[Removed]`: Erradicación directa de módulos, scripts, ramas de ejecución (branches lógicos) o utilidades CSS obsoletas.
- `[Fixed]`: Correcciones a anomalías de diseño, resolución de colapsos asimétricos del DOM responsivo, desbordamientos (overflows) fuera del viewport y mitigación de errores lógicos o de consola originados en JS.
- `[Security]`: Adición de atributos de fortificación en etiquetas (ej. `rel="noopener noreferrer"`), saneamiento de cargas útiles (payload sanitation) o resolución de exposición en encabezados y peticiones.

## 2. Pautas Arquitectónicas y Prerrogativas

1. **Abstracción al Bloque `[Unreleased]`:** Salvo que el usuario dictamine explícitamente la apertura o cierre de una versión oficial (e.g. `v1.0.0`, `v1.1.2`), toda inyección de cambios recaerá en el segmento unificado de `## [Unreleased]`.
2. **Registro Altamente Técnico:** El vocabulario para documentar la entrada debe carecer de ambigüedades. Describe la naturaleza técnica, mencionando los subsistemas o archivos impactados directamente (ej. _"Refactorización del Grid CSS y remoción de variables de color obsoletas (`--_espresso`) en la sección Hero."_).
3. **Persistencia Cronológica Inmediata:** No supongas actualizaciones asíncronas posteriores; el registro debe formalizarse en la misma iteración donde se produjo el despliegue del componente o resolución del bug.

## 3. Plantilla Estándar Declarativa

De requerir su creación desde cero, o si fue purgado, inicializa el fichero rigiendo la siguiente plantilla Markdown:

```markdown
# Changelog
Todos los cambios notables de este proyecto serán documentados en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

## [Unreleased]

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
```
