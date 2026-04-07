---
name: security_guidelines
description: Lineamientos de seguridad orientados a prevenir vulnerabilidades en la aplicación estática de Coffeecito.
---

# Directrices de Seguridad Web

Para mantener la integridad y seguridad de `10_landing_coffeecito`, todo código (HTML, CSS y JS puro) debe someterse a las siguientes regulaciones. Al tratarse de una arquitectura estática, las mitigaciones principales se enfocan del lado del cliente (Frontend).

## 1. Prevención de Cross-Site Scripting (XSS)
- **Manipulación Segura del DOM**: Está estrictamente prohibido el uso de métodos como `innerHTML`, `outerHTML` o `document.write` si el contenido proviene de alguna variable interactiva o dinámica. Sustitúyelo siempre por métodos seguros como `textContent`, `innerText`, o manipulación estructurada con `createElement()`.
- **Validación de Entradas**: Si futuras integraciones incluyen la recepción de strings a través de formularios o parámetros en la URL (Query Params), se debe escapar los caracteres críticos antes de interpretarlos en la UI.

## 2. Inclusiones de Terceros Seguras
- **Subresource Integrity (SRI)**: Cualquier librería o componente visual externo importado mediante `<script src="...">` o `<link href="...">` desde un CDN público debe incluir preferentemente los atributos `integrity` y `crossorigin="anonymous"`.
- Reducir al máximo la inclusión de scripts de terceros innecesarios para prevenir inyecciones a la cadena de suministro en el navegador de los usuarios.

## 3. Seguridad a Nivel de Servidor (Netlify)
- Las configuraciones críticas de encabezados HTTP como *Content Security Policy* (CSP), *X-Frame-Options* y protección contra MIME-sniffing *X-Content-Type-Options* deben administrarse directamente dentro del archivo `netlify.toml`.
- Evita forzar en el código redirecciones de protocolo puro. La encriptación (TLS/HTTPS) es manejada automáticamente por el host de Netlify.

## 4. Gestión de Claves Sensibles
- **Cero Hardcoding**: Ningún token privado, clave de bases de datos o credencial de apis administrativas se debe escribir de forma rígida dentro del directorio `scripts/` o el cuerpo del `index.html`. Dado que el proyecto es puramente estático de cara al cliente, todos los tokens y lógica secreta en el archivo final son visibles al público en el navegador.
