# Coffeecito Landing Page

Portafolio digital de **Angelica Correa** | `@coffeecito.ac`  
Creadora de contenido · Home Barista · Lifestyle

## Estructura del Proyecto

```
10_landing_coffeecito/
├── .github/
│   └── workflows/
│       └── main.yml        ← Pipeline CI/CD (Seguridad, Linting, Despliegue)
├── index.html              ← Página principal
├── styles/
│   ├── main.css            ← Sistema de diseño principal
│   └── animations.css      ← Micro-animaciones
├── scripts/
│   ├── main.js             ← Interacciones y counters
│   └── emailjs.js          ← Formulario + envío de PDF
├── assets/
│   ├── images/
│   │   ├── hero-bg.png         ← Imagen de fondo hero
│   │   └── collaborations/     ← Directorio estático de alianzas
│   └── pdf/
│       └── coffeecito-media-kit.pdf
├── package.json            ← Dependencias de desarrollo (Linters)
├── netlify.toml            ← Configuración de Netlify
└── PLAN.md                 ← Plan completo del proyecto
```

## Avance de Proyecto
- **Fase 1:** Completada — Estructura Visual.
- **Fase 2:** Completada — Hero Pitch y Valor.
- **Fase 3:** Completada — Panel de métricas e identidad con la comunidad.
- **Fase 4:** Completada — Autoridad Flex y refactor estático de marcas.

## CI/CD y Despliegue (Deploy)

Proyecto respaldado bajo un entorno automatizado **GitHub Actions**. Al hacer `push` o `pull request` hacia la rama `main`:
1.  **Seguridad**: Escaneo anti-leaks (`Gitleaks` + `CodeQL SAST`).
2.  **Calidad**: Validación rigurosa de sintaxis (HTMLHint, Stylelint, ESLint) con caché sobre Node 24.
3.  **Entrega Continua**: Automatizado mediante `Netlify CLI` (`netlify deploy --prod`).

URL de Producción: `https://coffeecito.netlify.app`

## Entorno Local

Al implementarse Linters estrictos, se introdujo `npm` para gestionar variables de validación:
```bash
# 1. Instalar dependencias de desarrollo (Linters)
npm install

# 2. Correr verificadores de calidad antes de realizar push
npm run lint:html
npm run lint:css
npm run lint:js

# 3. Lanzar entorno
npx serve .
```

## Contacto

- Instagram: [@coffeecito.ac](https://instagram.com/coffeecito.ac)
