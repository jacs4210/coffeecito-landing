# PROJECT_CONTEXT.md

> Archivo generado automáticamente por el agente de Antigravity.
> Última actualización: 2026-04-12T00:00:00-05:00
> No editar manualmente — regenerar con la skill `.agents/skills/update-project-context/SKILL.md`

---

## Descripción general

**Coffeecito Landing Page**: Portafolio digital y Media Kit de Angelica Correa (@coffeecito.ac), diseñado para conectar marcas con su comunidad de amantes del café y lifestyle a través de una experiencia visual premium y métricas de conversión.

**Repositorio:** https://github.com/jacs4210/coffeecito-landing
**Rama principal:** main

---

## Stack tecnológico

### Lenguajes
- **HTML5**: Estructura semántica.
- **CSS3**: Diseño personalizado (Vanilla) con variables y animaciones.
- **JavaScript (ES6+)**: Lógica de interacción, contadores y gestión de formularios.

### Frameworks y librerías principales
- **EmailJS SDK**: [4.x] — Gestión de envío de correos y adjuntos PDF desde el cliente.
- **Google Fonts**: Fuentes *Playfair Display* y *DM Sans*.

### Base de datos
- N/A (Persistencia no requerida en cliente estático).

### Herramientas de build y desarrollo
- **Vanilla Static**: No utiliza empaquetadores (No npm/vite/webpack para transpilación).
- **Node.js 24 & npm**: Para entorno de desarrollo local (Scripts de Linting).
- **Linters**: HTMLHint, Stylelint, ESLint.

### Testing
- **Linters**: Calidad estática de código automatizada (HTML, CSS, JS).
- **Manual**: Pruebas de responsividad e interacciones de formularios en breakpoints: 375px, 768px, 1280px.

---

## Arquitectura

**Tipo:** Pure Static / JAMstack

**Estructura de carpetas relevante:**

```
.
├── .agents/                # Configuraciones de IA (rules, skills, workflows)
├── .github/workflows/      # Pipeline CI/CD (main.yml)
├── assets/                 # Recursos multimedia y documentos
│   ├── images/             # Imágenes y logos de marcas
├── scripts/                # Lógica JS (main.js, emailjs.js (No usado temporalmente))
├── styles/                 # Estilos (main.css, animations.css)
├── package.json            # Dependencias Dev JS/CSS Linters
├── index.html              # Punto de entrada principal
└── netlify.toml            # Configuración de despliegue
```

**Patrones arquitectónicos identificados:**
- **Modularidad Vanilla**: Scripts organizados por responsabilidad e inicializados mediante IIFEs para evitar contaminación del scope global.
- **Reveal Pattern**: Uso de `IntersectionObserver` para disparar animaciones de entrada progresivas.
- **Progressive Enhancement**: Funcionalidades como "Load more" que mejoran la experiencia sin romper la base.
- **Separación de responsabilidades**: Estilos, scripts y assets divididos en directorios dedicados.

---

## Mapa de dependencias entre archivos

Este mapa indica qué archivos deben revisarse cuando se modifica uno en particular.
**Antes de ejecutar cualquier cambio**, identificar el archivo afectado y revisar sus dependientes.
**Después del cambio**, verificar que los dependientes no se rompieron.

| Archivo modificado        | Archivos a revisar antes y después                                       | Razón                                                                          |
|---------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| `styles/animations.css`   | `styles/main.css`, `index.html`, `scripts/main.js`                       | Las clases de animación son referenciadas en HTML y disparadas desde JS        |
| `styles/main.css`         | `index.html`, `styles/animations.css`                                    | Variables CSS y clases base son consumidas por ambos                           |
| `scripts/main.js`         | `index.html`, `styles/animations.css`                                    | Manipula clases CSS y referencias del DOM declaradas en HTML                   |
| `index.html`              | `styles/main.css`, `scripts/main.js`, `styles/animations.css`            | Es el punto de entrada — cualquier cambio estructural afecta todo el proyecto  |
| `netlify.toml`            | `.github/workflows/main.yml`                                             | Configuración de despliegue debe estar alineada con el pipeline                |
| `assets/images/`          | `index.html`, `styles/main.css`                                          | Referencias de imágenes declaradas en HTML y background-image en CSS           |
| `package.json`            | `.github/workflows/main.yml`                                             | Versión de Node y scripts de linting usados en el pipeline                     |

---

## Definition of Done por sección

Criterios verificables que definen cuándo una sección está correctamente implementada.
**El agente debe validar estos criterios antes de reportar una tarea como completada.**
Si un criterio no puede verificarse automáticamente, marcarlo como `[VERIFICAR MANUAL]`.

### Barra de navegación
- [ ] Barra de navegación visible en todas las secciones
- [ ] Barra de navegación responsiva: una columna en mobile, múltiples en desktop
- [ ] Barra de navegación con enlaces a todas las secciones

### Hero
- [ ] Video de fondo reproduce automáticamente, sin sonido, en loop, en mobile y desktop
- [ ] El texto principal es legible sobre el video (sin brillo excesivo ni contraste bajo — mínimo WCAG AA)
- [ ] El botón CTA está visible, redirige al Instagram de la marca (@coffeecito.ac) y es tappable en mobile
- [ ] En los primeros 3 segundos de carga, el impacto visual es suficiente para invitar al scroll `[VERIFICAR MANUAL]`
- [ ] La sección ocupa exactamente 100vh sin desbordamiento en ningún breakpoint
- [ ] Responsivo verificado en: 375px, 768px, 1280px

### Sobre Mí
- [ ] Sección con imagen de perfil, texto descriptivo y métricas de Instagram
- [ ] Imagen de perfil con badge de seguidores
- [ ] Texto descriptivo con al menos 3 párrafos
- [ ] Métricas de Instagram con valores reales (80K seguidores)
- [ ] Sección responsiva: una columna en mobile, múltiples en desktop

### Comunidad
- [ ] Titulo principal debe conectar con la comunidad y ser cercano.
- [ ] 4 cards que contienen metricas de la audiencia femenina, seguidores en instagram, vistas mensuales y recetas guardadas
- [ ] Debajo de las cards debe haber un texto que invite a las marcas a colaborar con la comunidad.
- [ ] Sección responsiva: una columna en mobile, múltiples en desktop
- [ ] Card que muestre 2 vistas previas de la cantidad de visualizaciones que tuvieron 2 de los reels de la marca.

### Marcas
- [ ] Grilla con todos los logos de las marcas que han colaborado
- [ ] Los logos deben ser unicamente los alojados en el directorio `assets/images/colaborations/`
- [ ] La grilla debe ser reponsiva en moviles, tablets y computadores.
- [ ] Los logos deben caber perfectamente en el contenedor que tiene asignado.
- [ ] Cuando se pasa el mouse en cada contenedor del log, debe resaltar el contenedor del logo con un delineado sutil con el color de la marca.

### Contenido
- [ ] 3 cards con los 3 tipos de contenido que produce la marca.
- [ ] Cada card debe tener un titulo, una imagen y un texto descriptivo.
- [ ] Las cards deben ser responsivas en moviles, tablets y computadores.
- [ ] Las cards deben tener un efecto de hover que muestre un texto descriptivo de lo que se puede encontrar en cada tipo de contenido.
- [ ] Las cards deben tener el icono de play centrado y redirigir al video en instagram.
- [ ] Las cards deben tener un boton que redirija al video en instagram.
- [ ] Debe tener un botón para poder ver mas formatos de videos y cargar otras 3 cards con los otros formatos.

### Fundamentos Visuales
- [ ] Variables CSS globales de paleta y tipografía definidas en `main.css`
- [ ] Escala tipográfica consistente: display / heading / body / caption aplicada en todas las secciones
- [ ] Espaciados entre secciones estandarizados mediante variables CSS
- [ ] Sin emojis usados como iconos — reemplazados por SVGs coherentes
- [ ] Todos los logos de marcas con mismo fondo, tamaño y resolución
- [ ] Tipografía consistente en todas las secciones

---

## Indice de skills disponibles

Ubicación: `.agents/skills/`
**El agente debe identificar qué skill aplicar según la naturaleza de la tarea antes de ejecutarla.**
No ejecutar tareas de las categorías listadas sin activar la skill correspondiente.

| Skill                          | Archivo                                              | Cuándo usarla                                                                              |
|-------------------------------|------------------------------------------------------|--------------------------------------------------------------------------------------------|
| `update_project_context`      | `.agents/skills/update-project-context/SKILL.md`     | Al iniciar o finalizar una sesión de trabajo para mantener el contexto al día              |
| `changelog_maintenance`       | `.agents/skills/changelog-maintenance/SKILL.md`      | Después de cualquier cambio implementado exitosamente — actualizar `CHANGELOG.md`          |
| `ci_cd_pipeline_and_devops`   | `.agents/skills/ci-cd-pipeline-and-devops/SKILL.md`  | Al modificar `.github/workflows/main.yml` o `netlify.toml`                                 |
| `personal_branding_guidelines`| `.agents/skills/personal-branding-guidelines/SKILL.md`| Antes de implementar cambios visuales, de copy o de estructura de secciones               |
| `code_review_rules`           | `.agents/skills/code-review-rules/SKILL.md`           | Cuando se implemente un cambio, debe cumplir con los estandares de code review y calidad de código.           |
| `cro_and_copywriting_strategy`| `.agents/skills/cro-and-copywriting-strategy/SKILL.md`| Antes de implementar cambios de textos o descripciones.               |
| `readme_maintenance_triggers` | `.agents/skills/readme-maintenance-triggers/SKILL.md` | Al finalizar una sesión de trabajo, se debe actualizar el readme del proyecto `README.md`.           |
| `security_guidelines` | `.agents/skills/security-guidelines/SKILL.md` | Antes de implementar cambios en el código, se debe revisar que se cumplan los estandares de seguridad.           |
| `ui_ux_architecture` | `.agents/skills/ui_ux_architecture/SKILL.md` | Antes de implementar cambios en el código, se debe revisar que se cumplan los estandares de ui/ux y arquitectura.           |
| `unit_testing_guidelines` | `.agents/skills/unit_testing_guidelines/SKILL.md` | Antes de implementar cambios en el código, se debe revisar que se cumplan los estandares de unit testing.           |

---

## Funcionalidades implementadas

- **Landing Page Responsiva**: Diseño optimizado para mobile y desktop.
- **Hero Dinámico**: Soporte para video background y animaciones stagger.
- **Métricas Animadas**: Contadores visuales para alcance y comunidad.
- **Showcase de Contenido**: Grid de Instagram Reels integrado.

**Últimos cambios detectados:**
- **Pipeline CI/CD**: Implementado en `.github/workflows/main.yml` con Gitleaks, CodeQL SAST, Linters (Node.js 24) y deploy automático vía Netlify CLI.
- **Fase 4 (Marcas / Autoridad)**: Rediseño total de la sección de marcas bajo paradigma estático de Flexbox. Micro-animaciones de Scroll Staggering. Depuración de módulos de carrusel rotativo.
- **Fase 3 (Métricas y Comunidad)**: Sección de red/comunidad con métricas actualizadas y layout `1fr` pulido para mobile (Abril 2026).
- **Fase 2 (Hero/Visuals)**: Hero con video placeholder y narrativa editorial. Video final pendiente de carga.

---

## Integraciones y servicios externos

| Servicio       | Propósito                                   | Cómo se integra                                  | Estado         |
|----------------|---------------------------------------------|--------------------------------------------------|----------------|
| **Netlify**    | Hosting y CDN                               | Despliegue continuo desde GitHub vía CLI         | ✅ Activo       |
| **Google Fonts**| Tipografía premium                         | Inyección vía `<link>` en `index.html`           | ✅ Activo       |
| **Instagram**  | RRSS / Contenido                            | Enlaces directos y visualización de Reels        | ✅ Activo       |
| **WhatsApp**   | Contacto directo                            | Enlace con API de WA                             | ✅ Activo       |

---

## CI/CD y despliegue

**Herramienta CI/CD:** GitHub Actions
**Archivo de configuración:** `.github/workflows/main.yml`

**Stages del pipeline:**
1. **Security Scan**: Análisis superficial con Gitleaks (secrets) e inteligencia SAST con CodeQL.
2. **Linting & Validation**: Escaneos con caché de dependencias NPM en Node.js 24 (HTMLHint, Stylelint, ESLint).
3. **Deploy**: Ejecución vía Netlify CLI hacia producción al confirmar en rama `main`.

**Triggers:**
- Push y Pull Requests a la rama `main`.

**Entornos:**
- **Production**: https://coffeecito.netlify.app

**Plataforma de despliegue:** Netlify

---

## Entorno de desarrollo local

**Requisitos previos:**
- Navegador moderno.
- Node.js 24 y npm.
- Servidor local HTTP (recomendado: `npx serve .`).

**Comandos principales:**

```bash
# Instalar dependencias para linters (Dev Dependencies)
npm install

# Correr linters para verificar calidad antes de hacer push
npm run lint:html
npm run lint:css
npm run lint:js

# Lanzar entorno local
npx serve .
```

---

## Convenciones y estándares

- **Nombrado de archivos:** kebab-case (ej: `emailjs.js`, `hero-bg.png`).
- **Nombrado de componentes:** Clases CSS siguiendo nomenclatura descriptiva orientada a secciones (no BEM formal).
- **Linter:** `htmlhint` (`.htmlhintrc`), `stylelint` (`.stylelintrc.json`), `eslint` (`.eslintrc.json`).
- **Formatter:** N/A (Manual).
- **Commits:** Prefijos `Feat:` y `Fix:` observados en historial. Mantener esta convención.

---

## Restricciones técnicas conocidas

- **Pure Vanilla**: Restricción explícita de no usar frameworks (React/Vue/etc.) definida en `.agents/rules.md`. Todo debe resolverse con HTML5, CSS3 y JS ES6+ nativo.
- **Sin empaquetadores**: No usar Vite, Webpack, Parcel ni similares. El proyecto se sirve estático.
- **Carga de Assets**: Dependencia de assets locales y externos (Instagram) para la estética visual. Los assets de marcas deben mantenerse en `assets/images/`.

---

## Notas del agente

- El video del Hero es actualmente un placeholder. La tarea de cargarlo está bloqueada hasta recibir el archivo final de video de Angélica.
- Las fotos para la banda "Contenido que convierte" (`reel-preview-1.jpg` y `reel-preview-2.jpg`) están pendientes de subir a `assets/images/`.
- La sección Definition of Done de este archivo tiene entradas `[VERIFICAR MANUAL]` que requieren inspección humana o Lighthouse — el agente no puede verificarlas automáticamente.
