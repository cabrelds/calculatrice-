/* Calculatrice Scientifique - Logique */
function memClear() {
  state.memory = 0;
  updateDisplay();
}

function memRecall() {
  state.expression += formatNumber(state.memory);
  updateDisplay();
}

function memPlus() {
  const val = parseFloat(state.result);
  if (!isNaN(val)) state.memory += val;
  updateDisplay();
}

function memMinus() {
  const val = parseFloat(state.result);
  if (!isNaN(val)) state.memory -= val;
  updateDisplay();
}
function formatNumber(n) {
  if (isNaN(n)) return 'Erreur';
  if (!isFinite(n)) return n > 0 ? '∞' : '-∞';
  const abs = Math.abs(n);
  if (abs >= 1e12 || (abs < 1e-9 && abs > 0)) {
    return n.toExponential(8).replace(/\.?0+(e)/, '$1');
  }
  let s = parseFloat(n.toPrecision(12)).toString();
  if (s.includes('e')) {
    s = n.toExponential(8).replace(/\.?0+(e)/, '$1');
  }
  return s;
}
function toggleMode() {
  state.isDegree = !state.isDegree;
  updateDisplay();
}
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  const key = e.key;

  if (key >= '0' && key <= '9') {
    state.expression += key;
    updateDisplay();
    return;
  }
  if (key === 'Enter' || key === '=') {
    updateDisplay();
    return;
  }
  if (key === 'Backspace') {
    state.expression = state.expression.slice(0, -1);
    updateDisplay();
    return;
  }
  if (key === 'Escape') {
    state.expression = '';
    state.result = '0';
    updateDisplay();
    return;
  }
  if (key === '+') { state.expression += '+'; updateDisplay(); return; }
  if (key === '-') { state.expression += '−'; updateDisplay(); return; }
  if (key === '*') { state.expression += '×'; updateDisplay(); return; }
  if (key === '/') {
    e.preventDefault();
    state.expression += '÷';
    updateDisplay();
    return;
  }
  if (key === '.') { state.expression += '.'; updateDisplay(); return; }
  if (key === '(') { state.expression += '('; updateDisplay(); return; }
  if (key === ')') { state.expression += ')'; updateDisplay(); return; }
});
// ── Gestion SHIFT ────────────────────────────────
function toggleShift() {
  state.shift = !state.shift;
  updateDisplay();
}

document.querySelector('[data-action="shift"]')
  ?.addEventListener('click', () => {
    toggleShift();
});