---
name: security_guidelines
description: Directrices de prevención de ataques estáticos frente a cara del usuario (web Vanilla).
---
# Directrices de Seguridad

Siendo la representación digital, estática y la interacción expuesta cara a cara del usuario puro en el internet, debe asumir:

## Mitigación de XSS (Cross-Site Scripting)
- Jamás, bajo ningún concepto, el agente puede usar de manera arbitraria o indiscriminada referencias como `innerHTML` para la inyección de atributos que contengan parámetros URL variables, cadenas o retornos no controlados del sistema. Optar ineludiblemente por `textContent` si la alteración se restringe a texto puro o realizar procesos de "sanitization" con alta precaución.

## Restricción de "Secrets" y Hardcoding
- **Tolerancia Cero ABSOLUTA al hardcoding.** En una plataforma puramente orientada en estáticos al cliente final, todas las referencias a tokens de APIs privativas institucionales o externas que no cuenten con sistemas de seguridad públicos, llaves de accesos privados o servicios back-office, NUNCA figurarán impresas ni importables desde los scripts `JS`.
- Para pasarelas de pago livianas o dependencias públicas (ej. `EmailJS` para envíos transaccionales) única y exclusivamente se incrustarán llaves o tokens de origen público certificados, debidamente ocultos bajo protección referencial externa si lo permite.

## Políticas y CSP
- En caso de configurar la mutación del ecosistema a futuro frente a la plataforma, requerir directitvas (Content Security Policy) fuertes en el despliegue para garantizar que únicamente los orígenes conocidos por el sistema central tendrán el nivel de permiso natural.
