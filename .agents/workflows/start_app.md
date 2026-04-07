---
description: Cómo levantar y ejecutar la aplicación localmente
---
# Levantamiento del Entorno Local

Dado que el ecosistema técnico es Vanilla Frontend (HTML/CSS/JS Estático) sin empaquetadores ni frameworks o bases de Backend instalados, la puesta en marcha local es inmediata y no depende de scripts de Node.js, gestores como Maven, ni contenedores Docker.

Para visualizar el proyecto localmente y poder iterar sobre los componentes, estilos y flujos de usuario de forma correcta:

1. Idealmente la recomendación principal es usar la extensión **Live Server** si empleas VSCode o un IDE homologado, levantando el entorno directamente para habilitar hot-reloading de los ficheros y resolución de rutas dinámicas.
2. Alternativamente, y como método estándar desde línea de comandos si Python 3 figura en tu stack de sistema, enciende un servidor local ligero apuntando a la raíz del proyecto ejecutando:

// turbo
```bash
python3 -m http.server 8000
```

3. Navega hacia [http://localhost:8000](http://localhost:8000) en tu navegador para ver la página desplegada con todos los activos estáticos y estilos cargados correspondientes.
