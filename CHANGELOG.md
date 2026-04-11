# Changelog
Todos los cambios notables de este proyecto serán documentados en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

## [Unreleased]

### Added
- **Pipeline CI/CD en GitHub Actions**: Implementación del flujo de validación y despliegue continuo vía `.github/workflows/main.yml`, integrando escaneos de seguridad (`Gitleaks` + `CodeQL`) y subida automática a Netlify bajo eventos `push` a la rama principal apoyada por Node.js 24.
- **Control de Calidad Estrictos (Linters)**: Incorporación de librerías en devDependencies sobre un nuevo `package.json` en conjunto con `.htmlhintrc`, `.stylelintrc.json` y `.eslintrc.json`, mitigando introducciones de bugs para HTML, CSS y JS.
- **Componente de Comunidad (Fase 3):** Desplegado de tarjetas de métricas sobre la sección Comunidad con soporte full responsive a 1-columna.
- **Efectos Scroll Cascading (Fase 4):** Implementadas animaciones de cascada `.reveal` controladas por `transition-delay` en css para aparición progresiva a través de la grilla de marcas y la arquitectura de la API Observer.

### Changed
- **Dependencias Locales**: Generado de `package-lock.json` explícito posibilitando la carga desde caché (`cache: 'npm'`) mitigando el peso de los Workflows de Integración.
- **Configuración CSS/JS Vanilla**: Ajustadas limitantes rígidas de Stylelint (`keyframes-name-pattern`, `value-keyword-case`) e indexación global readonly (`emailjs`) sobre ESLint, erradicando retenciones de Falsos Positivos en linting.
- **Directrices Estructurales (Fase 4):** Refactorización contundente del layout de Marcas (`.marcas-section`). Se superó la limitación rígida de `display: grid` optando por `display: flex; flex-wrap: wrap;` para asegurar adaptabilidad centrada al tener un número impar de logos comerciales (17).
- **Responsive Layout Constraints (Fase 4):** Revisión heurística de resoluciones móviles adaptando la directriz de métricas a 1 columna. Asignación del limitador paramétrico de fluidos CSS `min(100%, 185px)` para evitar colapsos de desbordamiento horizontal en el canvas originado por logos excesivamente rectangulares como Homecenter.
- **Copywriting Strategy (Fase 4):** Sustitución del modelo semántico de biografía por directriz "Alianzas Auténticas", alineando la percepción persuasiva con las pautas autoritarias y consultivas del Personal Branding.
- **Scale Proportions:** Adaptación visual focalizada, implementando variable modificadora (`.logo-xl`) al `135%` en dominios de imagen intrínsecamente diminutos.

### Fixed
- **Estructura HTML Deficiente**: Remediación severa a nivel sintaxis inyectando etiqueta omitida (`</div>`) al colapsar el contenedor principal iterado `.container` de la sección '#contenido', evitando fallas de DOM Tree durante el Linter.

### Removed
- **Módulo JS Interactivo (Fase 4):** Purga profunda del script indexado en `main.js` sobre rotadores sin fin (`.marquee-wrapper`) y ventanas colapsables (`.marcas-modal`) primando credibilidad estética nativa sobre interacción forzada.
