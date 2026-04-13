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