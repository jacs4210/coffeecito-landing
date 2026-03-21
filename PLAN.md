# 🎯 Plan: Portafolio Digital de Coffeecito — De PDF a Landing Page

> **Sujeto:** Angelica Correa | `@coffeecito.ac` | Creadora de Contenido · Home Barista · Lifestyle  
> **Objetivo:** Landing page accesible desde cualquier dispositivo, compartible por enlace, con envío de PDF por correo automático.

> **Imagen disponible:** `Photo_Angie_Correa.jpeg` (directorio de trabajo) — usada en Hero y sección "Sobre mí".

---

## 📖 Análisis del PDF Actual

El documento `Angie_Correa_Coffeecito.pdf` es un portafolio de 9 páginas con:

| Sección             | Contenido                                              |
| ------------------- | ------------------------------------------------------ |
| Introducción        | Presentación personal y propuesta de valor             |
| Colaboraciones      | +15 marcas (MONIN, Miniso, Olímpica, Homecenter, etc.) |
| Estadísticas        | +77k seguidores · +370k alcance mensual · 85% mujeres  |
| Contenido destacado | Reels con 136k–622k vistas                             |
| Tarifas             | $200k – $8.6M COP según formato                        |
| Diferenciador       | Producción cuidada, autenticidad, experiencia barista  |

**Estética:** Tonos beige/rosados y detalles dorados — base perfecta para una landing page premium.

---

## 🧠 ¿Por qué una Landing Page supera al PDF?

| Característica              | PDF | Landing Page |
| --------------------------- | --- | ------------ |
| Accesible sin descarga      | ❌  | ✅           |
| Optimizado para móvil       | ❌  | ✅           |
| Métricas de visitas         | ❌  | ✅           |
| Envío de PDF por correo     | ❌  | ✅           |
| Actualizable en tiempo real | ❌  | ✅           |
| SEO / descubrible en Google | ❌  | ✅           |
| Animaciones y video         | ❌  | ✅           |

---

## 🎨 Concepto Visual

**Paleta de colores:**

- `#F5EFE6` — Beige crema (fondo principal)
- `#C8956C` — Café con leche (acento cálido)
- `#E8C9A0` — Dorado suave (highlights)
- `#3B2314` — Café oscuro (textos)
- `#FAF0E6` — Lino (fondos secundarios)

**Tipografía:**

- Títulos: `Playfair Display` (elegante, editorial)
- Cuerpo: `DM Sans` (legible, moderno)

---

## 🗂️ Arquitectura de la Landing Page

```
┌──────────────────────────────────────────────┐
│  HERO                                        │
│  Foto + nombre + tagline + CTA               │
├──────────────────────────────────────────────┤
│  SOBRE MÍ                                    │
│  Mini bio · foto lifestyle                   │
├──────────────────────────────────────────────┤
│  ESTADÍSTICAS  (contadores animados)         │
│  +77K followers · +370K alcance · 622K vistas│
├──────────────────────────────────────────────┤
│  MARCAS CON LAS QUE HE TRABAJADO             │
│  Logo grid en scroll marquee animado         │
├──────────────────────────────────────────────┤
│  CONTENIDO DESTACADO                         │
│  Embed de Reels de Instagram                 │
├──────────────────────────────────────────────┤
│  TARIFAS / FORMATOS                          │
│  Cards con precio y CTA por formato          │
├──────────────────────────────────────────────┤
│  FORMULARIO "ESCRÍBEME"                      │
│  Nombre · Empresa · Email · Mensaje          │
│  → Envía el PDF al correo automáticamente    │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
│  Instagram · WhatsApp · Email                │
└──────────────────────────────────────────────┘
```

---

## 🛠️ Stack Técnico

### Hosting + Subdominio

Todas las plataformas incluyen **HTTPS gratuito**, deploy automático desde GitHub y **dominio propio sin costo**:

| Plataforma                                       | Subdominio gratuito      | Ancho de banda | Recomendada para   |
| ------------------------------------------------ | ------------------------ | -------------- | ------------------ |
| [Netlify](https://netlify.com) ⭐                | `coffeecito.netlify.app` | 100 GB/mes     | Esta landing page  |
| [Vercel](https://vercel.com)                     | `coffeecito.vercel.app`  | 100 GB/mes     | Si se usa Next.js  |
| [Cloudflare Pages](https://pages.cloudflare.com) | `coffeecito.pages.dev`   | **Ilimitado**  | Máximo rendimiento |

> **Recomendación:** Netlify para el MVP. Migrar a Cloudflare Pages si se necesita mayor escala.

---

### 🌐 Estrategia de Dominio — Por Etapas

| Etapa | Dominio | Costo |
| ----- | ------- | ----- |
| **Fase 1 (ahora)** | `coffeecito.netlify.app` — subdominio gratuito de Netlify | $0 USD |
| **Fase 6 (futuro)** | `coffeecito.com` registrado en [Porkbun](https://porkbun.com) — dominio propio `.com` | ~$11 USD/año |

> 💡 Porkbun es el registrador recomendado para el `.com`: precio de registro y renovación iguales (~$11/año), sin sorpresas. Incluye HTTPS y WHOIS privacy gratis.

---

### Frontend + Email

| Capa                   | Tecnología                                            |
| ---------------------- | ----------------------------------------------------- |
| Frontend               | HTML + CSS + Vanilla JS                               |
| Formulario + envío PDF | [EmailJS](https://emailjs.com) (200 mails/mes gratis) |

---

## 📧 Flujo: Envío de PDF por Correo

```
Usuario llena el formulario
         ↓
EmailJS recibe los datos
         ↓
PDF adjuntado desde CDN/hosting
         ↓
Email enviado al usuario con el media kit
         ↓
Angie recibe copia del lead
```

**Email automático:**

- Asunto: `¡Hola [Nombre]! Aquí tienes el Media Kit de Coffeecito ☕`
- Adjunto: `coffeecito-media-kit-2026.pdf`
- Copia a: `angie_3791@hotmail.com`

---

## 🚀 Fases de Implementación

### Fase 1 — Fundación (Días 1–2)

- [ ] Optimizar el PDF para web (< 3 MB con Smallpdf o Adobe)
- [ ] Crear repositorio en GitHub (`coffeecito-landing`)
- [ ] Configurar cuenta en Netlify
- [x] **Foto de Angie disponible:** `Photo_Angie_Correa.jpeg` (en el directorio del proyecto)
- [ ] Conseguir logos PNG/SVG de marcas colaboradoras (MONIN, Miniso, Olímpica, etc.)
- [ ] Verificar disponibilidad de `coffeecito.com` en Porkbun y registrar si está libre

### Fase 2 — Frontend (Días 3–6)

- [ ] Estructura base: `index.html`, `styles/main.css`, `scripts/main.js`
- [ ] Sección Hero con foto y tagline
- [ ] Sección "Sobre mí"
- [ ] Contadores animados de estadísticas
- [ ] Logo grid de marcas (scroll marquee)
- [ ] Embed de Reels de Instagram
- [ ] Cards de tarifas
- [ ] Formulario de contacto

### Fase 3 — Formulario + Email (Día 7)

- [ ] Configurar EmailJS con plantilla personalizada
- [ ] Integrar formulario con API de EmailJS
- [ ] Subir PDF optimizado al hosting
- [ ] Probar envío con adjunto en distintos clientes de correo

### Fase 4 — Deploy y Pulido (Días 8–9)

- [ ] Deploy en Netlify (`coffeecito.netlify.app`)
- [ ] Conectar dominio personalizado
- [ ] Pruebas de responsividad (móvil · tablet · desktop)
- [ ] SEO básico (meta tags, og:image, favicon)
- [ ] Google PageSpeed > 90

### Fase 5 — Mejoras de Contenido (Futuro)
- [ ] Sección de testimonios de marcas colaboradoras
- [ ] Integrar Calendly para agendar llamadas directamente
- [ ] Página multi-idioma ES/EN para marcas internacionales
- [ ] Analytics de descargas del PDF

### Fase 6 — Identidad de Marca Completa (Futuro)

Una vez que la landing esté consolidada, dar el salto a identidad digital profesional:

#### 🌐 Dominio propio `.com`
- Registrar `coffeecito.com` en [Porkbun](https://porkbun.com) (~$11 USD/año)
- Conectar el dominio a Netlify (CNAME record, 5 minutos)
- La URL pasa de `coffeecito.netlify.app` → `coffeecito.com`

#### 📧 Correo con marca propia
Al tener el dominio `.com`, activar el correo de la marca en dos pasos:

| Paso | Herramienta | Acción | Costo |
| ---- | ----------- | ------ | ----- |
| **Inmediato** | [Cloudflare Email Routing](https://cloudflare.com) | `hola@coffeecito.com` redirige al Hotmail actual. Sin migrar nada. | $0 USD |
| **Luego** | [Zoho Mail](https://zoho.com/mail) | Cuenta propia `angie@coffeecito.com`, 5 GB, sin publicidad | $0 USD |
| **Largo plazo** | [Google Workspace](https://workspace.google.com) | Gmail con dominio propio, suite completa | ~$6 USD/mes |

> 💡 El correo con dominio propio refuerza la marca ante colaboradoras como MONIN o Miniso. Con Zoho Mail la cuenta queda gratis y profesional desde el primer día.

---

## 📐 Estructura de Archivos

```
coffeecito-landing/
├── index.html
├── styles/
│   ├── main.css
│   └── animations.css
├── scripts/
│   ├── main.js
│   └── emailjs.js
├── assets/
│   ├── images/
│   │   ├── hero-photo.jpg
│   │   └── logos/          ← logos de marcas
│   └── pdf/
│       └── coffeecito-media-kit.pdf
├── netlify.toml
└── README.md
```

---

## 💰 Estimado de Costos

| Ítem                   | Opción gratuita               | Opción recomendada                             |
| ---------------------- | ----------------------------- | ---------------------------------------------- |
| Hosting                | Netlify (free forever) — $0   | Netlify — $0                                   |
| Subdominio             | `coffeecito.netlify.app` — $0 | `coffeecito.netlify.app` — $0                  |
| Dominio personalizado  | — (no aplica)                 | `coffeecito.com` en Porkbun — **~$11 USD/año** |
| Formulario + email PDF | EmailJS (200 mails/mes) — $0  | EmailJS — $0                                   |
| **Total primer año**   | **$0 USD**                    | **~$11 USD/año**                               |

> ℹ️ Con la opción gratuita la URL quedaría `coffeecito.netlify.app` — funcional pero menos profesional. Con $11/año se tiene un dominio `.com` propio para siempre.

---

> ☕ _"Conectar desde lo auténtico... taza a taza"_
