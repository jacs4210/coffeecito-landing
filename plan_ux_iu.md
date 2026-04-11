# Plan de Implementación — Auditoría UX/UI Coffeecito

## Fase 1 — Fundamentos visuales
*Prioridad: crítica. Sin esto, los demás cambios no tienen coherencia.*

### 1.1 Sistema de diseño base
- [x] Definir paleta definitiva: primario, secundario, acento, fondo, texto
- [x] Establecer escala tipográfica: heading display / heading / body / caption
- [x] Crear variables CSS globales para colores y tipografías
- [x] Revisar y estandarizar espaciados entre secciones

### 1.2 Consistencia visual
- [x] Unificar idioma del nav → todo en español o todo consistente
- [x] Reemplazar emojis como iconos por SVGs o iconografía coherente
- [x] Estandarizar todos los logos de marcas: mismo fondo, mismo tamaño, misma resolución
- [x] Definir un sistema de sombras y bordes consistente

---

## Fase 2 — Hero y primera impresión
*Prioridad: alta. Es lo primero que ve una marca.*

- [x] Incorporar video de fondo (Queda PENDIENTE cargar archivo de video final, usar placeholder)
- [x] Revisar headline para que tenga más fuerza editorial en 5 palabras o menos
- [x] Asegurar que los dos CTAs ("Hablemos" y "Ver contenido") tengan jerarquía visual clara: uno primario, uno secundario
- [x] Añadir micro-animación de entrada (fade + slide) para el texto del Hero
- [x] Verificar que el Hero ocupe exactamente el 100vh sin desbordamiento

---

## Fase 3 — Métricas y datos de audiencia
*Prioridad: alta. Es el argumento de venta más fuerte.*

### 3.1 Rediseño de métricas actuales
*(PENDIENTE: Subir las fotos definitivas para la banda "Contenido que convierte" `assets/images/reel-preview-1.jpg` y `2.jpg`)*
- [x] Reemplazar contadores animados vulnerables por valores estáticos con diseño
- [x] Cambiar métrica de % femenina por volumen real de interacciones (55K)
- [x] Añadir visualizaciones de vistas por video como lista secundaria
- [x] Asegurar que los números sean el apoyo visual, no el foco principal

### 3.2 Nueva sección: Perfil de Audiencia
- [x] Crear sección dedicada entre Métricas y Pautas Publicitarias
- [x] Mostrar distribución geográfica (incorporada al nuevo estilo de comunidad)
- [x] Mostrar perfil demográfico enfocado en lifestyle
- [x] Diseñar con tarjetas limpias tipo Bento Grid
- [x] Redactar el copy con orientación CRO a marcas

---

## Fase 4 — Sección de marcas
*Prioridad: alta. Primera señal de credibilidad.*

- [x] Eliminar banner de scroll infinito actual (filtrado al Top 9)
- [x] Implementar carrusel continuo simplificado y elegante
- [x] Añadir efecto hover en cada logo: escala + sombra + brillo
- [x] Añadir CTA "Ver todas las marcas" debajo del carrusel con estilo outline
- [x] Construir modal/overlay con grid responsivo y todas las 17 marcas:
  - Desktop: 4 columnas
  - Tablet: 3 columnas
  - Mobile: 2 columnas
- [x] Animación de entrada del modal: fade + scale in
- [x] Botón de cierre visible + cierre al clic fuera del modal

---

## Fase 5 — Contenido y rendimiento
*Prioridad: media. Refuerza la credibilidad creativa.*

- [ ] Añadir miniaturas reales o preview visual de los reels destacados
- [ ] Incluir indicador del tipo de contenido por card (Reel, Tutorial, Reseña…)
- [ ] Agregar más de 3 piezas de contenido, con opción de "Ver más"
- [ ] Indicar visualmente que los links abren en Instagram (ícono externo)

---

## Fase 6 — Pautas Publicitarias (antes "Formatos")
*Prioridad: media. Es la sección de cierre comercial.*

- [ ] Renombrar sección a "Pautas Publicitarias"
- [ ] Reemplazar emojis por iconografía SVG coherente con el sistema de diseño
- [ ] Añadir jerarquía visual clara: formato destacado vs. complementarios
- [ ] Para la Campaña 12 Reels: añadir 1 línea de contexto de valor antes del precio
- [ ] Revisar que el CTA de cada tarjeta lleve directamente al campo correcto del formulario
- [ ] Implementar validación en tiempo real (inline validation) y micro-interacción de éxito/carga en el formulario
- [ ] Pre-selección inteligente de formato: si el usuario elige un plan desde la card, el formulario debe mostrar esa opción automáticamente


---

## Fase 7 — Nuevas secciones
*Prioridad: media. Completan la narrativa comercial.*

### 7.1 Mi diferencial
- [ ] Crear sección entre "Sobre mí" y "Métricas"
- [ ] 3 a 4 puntos que diferencien a Angélica de otros creadores
- [ ] Tono: cálido, seguro, femenino

### 7.2 Agradecimiento final
- [ ] Crear sección de cierre antes del footer
- [ ] Texto breve, emocional, que deje una última impresión memorable
- [ ] CTA final suave hacia la sección de contacto

---

## Fase 8 — UX, navegación y accesibilidad
*Prioridad: media-baja, pero necesaria para la experiencia completa.*

- [ ] Implementar botón flotante "Back to top" (aparece al bajar 300px)
- [ ] Añadir estado activo/highlight en nav al hacer scroll por secciones
- [ ] Añadir atributos alt descriptivos reales a todos los logos e imágenes
- [ ] Revisar contraste de texto en todas las secciones (mínimo WCAG AA)
- [ ] Añadir focus states visibles para navegación por teclado
- [ ] Verificar comportamiento responsive en breakpoints: 375px / 768px / 1280px
- [ ] Implementar *Scroll-driven animations* (CSS puro) para elementos clave como el grano de café o la entrada de secciones
- [ ] Diseñar e implementar página 404 personalizada con narrativa de marca ("Café frío")


---

## Fase 9 — Performance y Optimización Técnica
*Prioridad: alta. La velocidad es la primera capa de la experiencia de usuario.*

- [ ] Implementar etiquetas `<picture>` con formatos **WebP** y `srcset` para todas las imágenes críticas
- [ ] Configurar `font-display: swap` y auto-hospedaje de Google Fonts para eliminar el CLS (Cumulative Layout Shift)
- [ ] Aplicar **CSS Container Queries** en componentes de tarjetas (Tarifas/Reels) para mayor robustez visual
- [ ] Optimizar el "Critical Rendering Path" para lograr un LCP (Largest Contentful Paint) menor a 1.2s

---

## Fase 10 — SEO y Presencia Social
*Prioridad: media. Mejora el indexing y la autoridad del perfil.*

- [ ] Implementar datos estructurados (Schema.org) tipo `Person` y `ProfessionalService`
- [ ] Optimizar etiquetas Open Graph (OG) y Twitter Cards para previews ricas al compartir en redes
- [ ] Generar un Sitemap.xml y Robots.txt coherente con la estructura de la landing
- [ ] Revisar jerarquía de headings (h1 a h4) para asegurar un outline de contenido perfecto para rastreadores

---

## Resumen de prioridades (Actualizado)

| Fase | Área | Impacto | Esfuerzo |
|------|------|---------|----------|
| 1 | Fundamentos visuales | 🔴 Crítico | Medio |
| 2 | Hero | 🔴 Alto | Medio |
| 3 | Métricas + Audiencia | 🔴 Alto | Alto |
| 9 | Performance Técnica | 🔴 Alto | Medio |
| 4 | Sección de marcas | 🟠 Alto | Alto |
| 6 | Pautas (CRO) | 🟠 Alto | Medio |
| 5 | Contenido/Rendimiento | 🟡 Medio | Medio |
| 7 | Nuevas secciones | 🟡 Medio | Medio |
| 10 | SEO & Social | 🟡 Medio | Bajo |
| 8 | UX y accesibilidad | 🟢 Necesario | Bajo |