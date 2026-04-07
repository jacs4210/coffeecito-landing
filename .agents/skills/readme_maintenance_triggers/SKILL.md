---
name: readme_maintenance_triggers
description: Reglas y disparadores para obligar la actualización continua de la documentación central.
---

# Disparadores de Actualización de Documentación (README)

Como agente, posees el mandato explícito de mantener la consistencia de la documentación a la par de la base de código. El archivo `README.md` JAMÁS se ignorará tras una operación transformativa. 

Si el agente realiza alguna de las siguientes alteraciones, está **obligado a insertar de forma correlativa la explicación necesaria en el correspondiente segmento del `README.md`**:

## Disparadores (Triggers) Restrictivos:
1. **Alteración de Estructura Clave (Scaffolding)**: Si por mandato superior sumas ecosistemas nuevos (un `package.json`, empaquetadores como Vite, linters) o la estructura cambia radicalmente al crear un directorio macro que afecte el funcionamiento primario.
2. **Nuevos Sistemas de Inicialización**: Si la receta para "Levantar" el software contenida hasta ahora sufre de anexos o requerimientos (Por ejemplo: obligatoriedad de uso de NodeJS `vX.Z.Y`, o adición de Dockerfiles/Docker Compose). La sub-sección de "Desarrollo Local" debe ser enmendada para no estancar futuros usos.
3. **Dependencias Expositivas**: Siempre que agregues servicios integrados consumidos desde la web como CDNs obligatorios y globales, u APIs rest externas conectadas. 

*Esta habilidad (Skill) representa un compromiso de 'Auto-Sanación' sobre la usabilidad del sistema para operadores humanos.*
