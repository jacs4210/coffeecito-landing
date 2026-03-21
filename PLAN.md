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

### ~~Fase 1 — Fundación~~ ✅ Completada

- [x] Estructura de carpetas del proyecto creada
- [x] `Photo_Angie_Correa.jpeg` copiada a `assets/images/`
- [x] Imagen hero generada → `assets/images/hero-bg.png`
- [x] PDF copiado a `assets/pdf/coffeecito-media-kit.pdf`
- [x] `netlify.toml` configurado para deploy
- [x] `README.md` y `.gitignore` creados
- [x] Repositorio Git inicializado — primer commit `ca27305`
- [ ] Optimizar el PDF para web (< 3 MB) — pendiente manual con Smallpdf
- [ ] Subir repositorio a GitHub (`coffeecito-landing`)
- [ ] Crear cuenta en Netlify y conectar el repositorio
- [ ] Conseguir logos PNG/SVG de marcas colaboradoras

### Fase 2 — Frontend (En progreso 🔨)

- [x] Estructura base: `index.html`, `styles/main.css`, `styles/animations.css`, `scripts/main.js`
- [x] Sección Hero con imagen de fondo y tagline
- [x] Sección "Sobre mí" con foto de Angie
- [x] Contadores animados de estadísticas (+77K, +370K, +622K)
- [x] Logo grid de marcas (scroll marquee animado)
- [x] Embed de Reels de Instagram
- [x] Cards de tarifas con CTA
- [x] Formulario de contacto (estructura HTML)

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

#### 📲 WhatsApp Business — Separar lo personal de la marca

El número actual (`310 422 6253`) es personal. Para la marca se recomienda un número dedicado con **WhatsApp Business App** — gratuita y pensada exactamente para este caso.

**¿Por qué un número separado?**
- Las marcas contactarán directamente a Angie por WhatsApp; mezclar mensajes personales con colaboraciones genera desorden.
- WhatsApp Business permite tener una ficha de empresa, respuestas automáticas, catálogo y etiquetas de contactos.
- El número personal queda totalmente privado.

**Opciones para obtener el número de marca:**

| Opción | Cómo | Costo |
| ------- | ---- | ----- |
| **SIM prepago ⭐** | Chip prepago de Claro/Movistar/Tigo (Colombia) dedicado a la marca | ~$5.000 – $10.000 COP |
| **Número virtual** | [Google Voice](https://voice.google.com) *(solo EE.UU.)* — no aplica en Colombia | $0 USD |
| **Número virtual CO** | [Dingaling](https://dingaling.com) o [Toky](https://toky.co) | ~$5–10 USD/mes |

> 💡 **Recomendación:** Un chip prepago de Tigo o Claro es lo más sencillo y económico para Colombia. Se usa solo para WhatsApp Business; no es necesario que tenga plan de datos activo continuamente.

**Configuración de WhatsApp Business App (gratis):**
- [ ] Instalar [WhatsApp Business](https://business.whatsapp.com) con el número de marca
- [ ] Completar el **perfil de empresa**: nombre `Coffeecito`, descripción, sitio web (`coffeecito.netlify.app`), email de marca
- [ ] Configurar **mensaje de bienvenida** automático para nuevos contactos
- [ ] Configurar **mensaje de ausencia** fuera de horario
- [ ] Crear **respuestas rápidas** para consultas frecuentes (tarifas, disponibilidad)
- [ ] Agregar el enlace de WhatsApp Business a la landing page: `https://wa.me/57XXXXXXXXXX?text=Hola%20Angie!%20Vi%20tu%20portafolio%20y%20me%20interesa%20colaborar%20%E2%98%95`

> ⚠️ WhatsApp Business App **no puede convivir con WhatsApp personal en el mismo número**. Por eso se necesita el número separado.

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

| Ítem | Fase 1 (ahora) | Fase 6 (futuro) |
| ---- | -------------- | --------------- |
| Hosting | Netlify — **$0** | Netlify — **$0** |
| Subdominio/Dominio | `coffeecito.netlify.app` — **$0** | `coffeecito.com` en Porkbun — **~$11 USD/año** |
| Email | `angie_3791@hotmail.com` — **$0** | Zoho Mail con dominio propio — **$0** |
| Formulario + envío PDF | EmailJS (200 mails/mes) — **$0** | EmailJS — **$0** |
| WhatsApp | Personal (actual) — **$0** | SIM prepago marca + WA Business — **~$10.000 COP** |
| **Total** | **$0 USD** | **~$11 USD/año + $10k COP una sola vez** |

> ℹ️ La Fase 6 convierte la landing en una identidad de marca completa por menos de $12 USD al año.

---

> ☕ _"Conectar desde lo auténtico... taza a taza"_
