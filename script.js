/* Calculatrice Scientifique - Logique */
// ── Références DOM ───────────────────────────────
const exprEl   = document.getElementById('expression');
const resultEl = document.getElementById('result');
const indShift = document.getElementById('ind-shift');
const indMode  = document.getElementById('ind-mode');
const indMem   = document.getElementById('ind-mem');
const screenEl = resultEl ? resultEl.closest('.screen') : null;

// ── Fonction mise à jour affichage ───────────────
function updateDisplay() {
  if (exprEl)   exprEl.textContent   = state.expression || '0';
  if (resultEl) resultEl.textContent = state.result;

  if (resultEl) {
    resultEl.classList.toggle(
      'error',
      state.result === 'Erreur' ||
      state.result === '∞' ||
      state.result === '-∞'
    );
  }

  if (indShift) indShift.classList.toggle('active', state.shift);
  if (indMode)  indMode.textContent = state.isDegree ? 'DEG' : 'RAD';
  if (indMode)  indMode.classList.add('active');
  if (indMem)   indMem.classList.toggle('active', state.memory !== 0);

  document.body.classList.toggle('shift-active', state.shift);
  document.getElementById('btn-shift')
    ?.classList.toggle('active', state.shift);
}
// ── Init ─────────────────────────────────────────
const state = {
  expression: '',
  result: '0',
  memory: 0,
  shift: false,
  isDegree: true,
  justCalculated: false,
  lastResult: '0',
};

updateDisplay();
