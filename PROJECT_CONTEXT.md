# PROJECT_CONTEXT.md

> Archivo generado automáticamente por el agente de Antigravity.
> Última actualización: 2026-04-10T22:30:00-05:00
> No editar manualmente — regenerar con la skill `.agents/skills/update-project-context/SKILL.md`

---

## Descripción general

**Coffeecito Landing Page**: Portafolio digital y Media Kit de Angelica Correa (@coffeecito.ac), diseñado para conectar marcas con su comunidad de amantes del café y lifestyle a través de una experiencia visual premium y métricas de conversión.

**Repositorio:** [https://github.com/jacs4210/coffeecito-landing](https://github.com/jacs4210/coffeecito-landing)
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
- **Vanilla Static**: No utiliza empaquetadores (No npm/vite/webpack).
- **Netlify**: Hosting y gestión de despliegue.

### Testing
- **Manual**: Pruebas de responsividad e interacciones de formularios.

---

## Arquitectura

**Tipo:** Pure Static / JAMstack

**Estructura de carpetas relevante:**
```
.
├── .agents/                # Configuraciones de IA (rules, skills, workflows)
├── assets/                 # Recursos multimedia y documentos
│   ├── images/             # Imágenes y logos de marcas
│   └── pdf/                # Media Kit (coffeecito-media-kit.pdf)
├── scripts/                # Lógica JS (main.js, emailjs.js)
├── styles/                 # Estilos (main.css, animations.css)
├── index.html              # Punto de entrada principal
└── netlify.toml            # Configuración de despliegue
```

**Patrones arquitectónicos identificados:**
- **Separación de responsabilidades**: Estilos, scripts y assets divididos en directorios dedicados.
- **Vanilla Patterns**: Uso de IIFEs para encapsulamiento de módulos en JavaScript.

---

## Funcionalidades implementadas

- **Landing Page Responsiva**: Diseño optimizado para mobile y desktop.
- **Hero Dinámico**: Soporte para video background y animaciones stagger.
- **Métricas Animadas**: Contadores visuales para alcance y comunidad.
- **Showcase de Contenido**: Grid de Instagram Reels integrado.
- **Formulario de Contacto**: Integración con EmailJS para captura de leads y solicitud de Media Kit.
- **Descarga de PDF**: Configuración de headers en Netlify para descarga forzada del Media Kit.

**Últimos cambios detectados:**
- **Fase 4 (Marcas / Autoridad)**: Rediseño total de la sección de marcas bajo paradigma estático de Flexbox. Inserción de micro-animaciones (Scroll Staggering) y depuración de módulos de carrusel rotativo.
- **Fase 3 (Métricas y Comunidad)**: Implementación de la sección de red/comunidad con métricas actualizadas y un ecosistema layout `1fr` pulido ante dispositivos menores (Abril 2026).
- **Fase 2 (Hero/Visuals)**: Actualización del Hero con video placeholder y narrativa editorial.
- **Fase 1 (Design System)**: Establecimiento de la identidad visual y sistema de diseño base.

---

## Integraciones y servicios externos

| Servicio | Propósito | Cómo se integra |
|----------|-----------|-----------------|
| **Netlify** | Hosting y CDN | Despliegue continuo desde GitHub |
| **EmailJS** | Envío de formularios | `[VERIFICAR]` Pendiente configuración de API Keys |
| **Google Fonts** | Tipografía premium | Inyección vía `<link>` |
| **Instagram** | RRSS / Contenido | Enlaces directos y visualización de Reels |
| **WhatsApp** | Contacto directo | Enlace con API de WA |

---

## CI/CD y despliegue

**Herramienta CI/CD:** Netlify + GitHub Actions (implícito en el flujo de Netlify).
**Archivo de configuración:** [netlify.toml](https://github.com/jacs4210/coffeecito-landing/blob/main/netlify.toml)

**Stages del pipeline:**
1. **Build**: No aplica (Static).
2. **Deploy**: Despliegue automático al pushear a `main`.

**Triggers:**
- Push a la rama `main`.

**Entornos:**
- **Production**: [https://coffeecito.netlify.app](https://coffeecito.netlify.app)

**Plataforma de despliegue:** Netlify

---

## Entorno de desarrollo local

**Requisitos previos:**
- Navegador moderno.
- Servidor local HTTP (recomendado: Live Server o `npx serve .`).

**Comandos principales:**
```bash
# No requiere instalación de dependencias npm

# Correr en desarrollo (ejemplo con serve)
npx serve .
```

**Variables de entorno requeridas** (Configuradas en `scripts/emailjs.js`):
```
EMAILJS_PUBLIC_KEY=
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
```

---

## Convenciones y estándares

- **Nombrado de archivos:** kebab-case (ej: `emailjs.js`, `hero-bg.png`).
- **Nombrado de componentes:** Clases CSS siguiendo una nomenclatura descriptiva (no formal BEM, pero orientada a secciones).
- **Linter:** N/A (Manual).
- **Formatter:** N/A (Manual).
- **Commits:** Prefijos `Feat:`, `Fix:` (Observado en el historial).

---

## Restricciones técnicas conocidas

- **Pure Vanilla**: Restricción explícita de no usar frameworks (React/Vue/etc.) según `.agents/rules.md`.
- **Carga de Assets**: Dependencia de assets locales y externos (Unsplash/Instagram) para la estética visual.

---

## Notas del agente

- El archivo `emailjs.js` contiene placeholders (`TU_PUBLIC_KEY`) que deben ser reemplazados en la Fase 3 del despliegue.
- Se ha marcado como `[VERIFICAR]` la integración de EmailJS hasta que se confirmen las credenciales reales.
- El proyecto utiliza un enfoque de "Diseño Premium" con micro-animaciones intensivas gestionadas por `animations.css` e Intersection Observer en JS.
