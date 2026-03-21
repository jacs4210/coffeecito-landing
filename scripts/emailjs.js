/* ══════════════════════════════════════════════════
   COFFEECITO — FORMULARIO + EMAILJS
   emailjs.js

   CONFIGURACIÓN PENDIENTE (Fase 3):
   1. Crear cuenta en https://emailjs.com
   2. Agregar servicio de email (Gmail / Hotmail)
   3. Crear plantilla de email con adjunto PDF
   4. Reemplazar PUBLIC_KEY, SERVICE_ID y TEMPLATE_ID abajo
══════════════════════════════════════════════════ */

// ─── CONFIGURACIÓN (completar en Fase 3) ────────
const EMAILJS_CONFIG = {
  publicKey:  'TU_PUBLIC_KEY',    // Dashboard > Account > Public Key
  serviceId:  'TU_SERVICE_ID',    // Email Services > Service ID
  templateId: 'TU_TEMPLATE_ID',  // Email Templates > Template ID
};

// SDK de EmailJS (carga dinámica para no bloquear render)
(function loadEmailJS() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    if (EMAILJS_CONFIG.publicKey !== 'TU_PUBLIC_KEY') {
      emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }
    initForm();
  };
  document.head.appendChild(script);
})();

// ─── FORMULARIO ──────────────────────────────────
function initForm() {
  const form      = document.getElementById('contactoForm');
  const success   = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  const btnText   = document.getElementById('btnText');
  const btnLoad   = document.getElementById('btnLoading');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    // UI: estado de carga
    submitBtn.disabled = true;
    btnText.hidden     = true;
    btnLoad.hidden     = false;

    const data = {
      nombre:     form.nombre.value.trim(),
      empresa:    form.empresa.value.trim(),
      email:      form.email.value.trim(),
      formato:    form.formato.value || 'No especificado',
      mensaje:    form.mensaje.value.trim(),
      enviar_pdf: form.enviarPdf.checked ? 'Sí' : 'No',
      pdf_url:    window.location.origin + '/assets/pdf/coffeecito-media-kit.pdf',
    };

    try {
      if (EMAILJS_CONFIG.publicKey === 'TU_PUBLIC_KEY') {
        // MODO DEMO: mostrar éxito sin enviar (hasta que se configure EmailJS)
        await simulateDelay(1200);
        console.log('📧 [DEMO] Datos del formulario:', data);
      } else {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          data
        );
      }

      // Éxito
      form.hidden    = true;
      success.hidden = false;

    } catch (error) {
      console.error('Error al enviar:', error);
      showError(form, 'Hubo un problema al enviar. Por favor escríbenos directamente a Instagram.');

      submitBtn.disabled = false;
      btnText.hidden     = false;
      btnLoad.hidden     = true;
    }
  });
}

// ─── VALIDACIÓN ───────────────────────────────────
function validateForm(form) {
  let valid = true;

  clearErrors(form);

  const required = [
    { field: form.nombre,  msg: 'Por favor ingresa tu nombre' },
    { field: form.empresa, msg: 'Por favor ingresa tu marca o empresa' },
    { field: form.email,   msg: 'Por favor ingresa tu correo' },
    { field: form.mensaje, msg: 'Por favor escríbenos un mensaje' },
  ];

  required.forEach(({ field, msg }) => {
    if (!field.value.trim()) {
      showFieldError(field, msg);
      valid = false;
    }
  });

  if (form.email.value && !isValidEmail(form.email.value)) {
    showFieldError(form.email, 'Por favor ingresa un correo válido');
    valid = false;
  }

  return valid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(field, msg) {
  field.style.borderColor = '#E57373';
  const err = document.createElement('span');
  err.className   = 'field-error';
  err.textContent = msg;
  err.style.cssText = 'display:block;font-size:0.75rem;color:#E57373;margin-top:0.25rem;';
  field.parentNode.appendChild(err);
}

function showError(form, msg) {
  const existing = form.querySelector('.form-global-error');
  if (existing) existing.remove();
  const err = document.createElement('p');
  err.className   = 'form-global-error';
  err.textContent = msg;
  err.style.cssText = 'font-size:0.85rem;color:#E57373;text-align:center;';
  form.appendChild(err);
}

function clearErrors(form) {
  form.querySelectorAll('.field-error, .form-global-error').forEach(e => e.remove());
  form.querySelectorAll('input, textarea, select').forEach(el => {
    el.style.borderColor = '';
  });
}

// ─── UTILIDADES ───────────────────────────────────
function simulateDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
