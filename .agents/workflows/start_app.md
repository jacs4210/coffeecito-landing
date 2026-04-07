---
description: Levantar la aplicación localmente
---

# Iniciar la aplicación en el entorno local

Debido a que este repositorio es un proyecto estático web puramente Vanilla Frontend (HTML/CSS/JS), sin un gestor de dependencias explícito (no empaquetadores como Vite o Webpack documentados), para servir y visualizar la aplicación localmente bastará con un servidor web estático liviano.

### Paso a Paso

1. Desde la raíz del repositorio, ubica el archivo `index.html`.
2. Para levantar el servidor localmente, puedes usar Python si está instalado (por defecto en macOS/Linux) u otro servidor HTTP que exponga el directorio de la aplicación:
   
   Ejemplo con Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Ejemplo con Node.js (npx y serve):
   ```bash
   npx serve .
   ```

3. Accede en el navegador a: `http://localhost:8000` (o el puerto respectivo) para visualizar la "Landing Coffeecito".
