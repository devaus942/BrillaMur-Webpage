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

    /* ────────────────────────────────────────
   STAT CARDS
   Click mantiene azul la última clickada.
   Hover funciona solo con CSS.
   ──────────────────────────────────────── */
const statCards = document.querySelectorAll('.stat-card');

statCards.forEach(card => {
  card.addEventListener('click', () => {
    // Quitar selected de todas
    statCards.forEach(c => c.classList.remove('selected'));
    // Poner selected en la clickada
    card.classList.add('selected');
  });
});
  });

});
