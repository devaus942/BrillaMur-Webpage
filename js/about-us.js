/* ════════════════════════════════════════
   BRILLAMUR – main.js
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────
     TIMELINE
     Al hacer clic en cualquier ítem:
     - El punto (tl-dot) de ese ítem se vuelve azul
     - La línea (tl-line) debajo de ese ítem se vuelve azul
     - Los demás vuelven al estado gris por defecto
     ──────────────────────────────────────── */
  const tlItems = document.querySelectorAll('.tl-item');

  tlItems.forEach(item => {
    item.addEventListener('click', () => {
      // Quitar active de todos
      tlItems.forEach(i => i.classList.remove('active'));
      // Poner active al clicado
      item.classList.add('active');
    });
  });

});
