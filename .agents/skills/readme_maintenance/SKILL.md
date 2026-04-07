---
name: readme_maintenance
description: Criterios y triggers para la redacción y actualización continua del README.md principal del proyecto.
---

# Mantenimiento del Proyecto y Documentación (README.md)

Para conservar la claridad del repositorio `10_landing_coffeecito`, es crítico que la documentación inicial sea un documento vivo (Living Document). Esta habilidad condiciona al agente a recordar cuándo y cómo debe actualizar el `README.md`.

## 1. Disparadores de Actualización (Triggers)
Siempre evalúa si el cambio que acabas de realizar amerita modificar el `README.md`. Debes modificarlo de forma proactiva cada vez que:
- Se agregan o eliminan nuevas herramientas en la estructura base (ej. nuevas carpetas en raíz distintas a `/styles`, `/assets` o `/scripts`).
- Se configuran nuevos flujos de desarrollo (Workflows) y scripts automatizados de gran importancia.
- Haya cambios fundamentales en la forma de ejecutar, desplegar o probar el sitio web o en el proveedor de despliegue principal (`netlify.toml`).

## 2. Estructura Obligatoria del README
Al redactar o actualizar el archivo, asegúrate de mantener como mínimo las siguientes secciones ordenadas:
- **Encabezado y Propósito**: Una breve descripción de qué es "Coffeecito Landing Page" y su propuesta de valor o diseño.
- **Stack Tecnológico**: Mención explícita de la naturaleza "Vanilla" (HTML, CSS y Javascript sin build-steps nativos complejos).
- **Instrucciones para Desarrollo (Local Setup)**: Cómo levantar el proyecto localmente (Usando comandos simples como `npx serve -s . -p 3000`).
- **Arquitectura de Carpetas**: Una breve vista general (Tree) de los directorios clave para navegación de devs (`/styles`, `/.agents`, etc.).
- **Despliegue**: Instrucciones básicas y directrices que expliquen cómo se orquesta la producción utilizando `netlify.toml`.

## 3. Estilo de Comunicación
- La redacción en el `README.md` debe estar en español neutro, presentándose de manera clara y profesional.
- Utiliza bloques de código, tablas y listas cortas (viñetas) en lugar de párrafos extensos y densos para facilitar su lectura en la terminal u host.
