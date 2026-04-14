/* Calculatrice Scientifique - Logique *// ── Utilitaires angles ───────────────────────────
// ── Utilitaires angles ───────────────────────────
function toRad(deg) { return deg * Math.PI / 180; }
function toDeg(rad) { return rad * 180 / Math.PI; }
// ── Fonctions trigonométriques ───────────────────
function calcSin(val) {
  return state.isDegree ? Math.sin(toRad(val)) : Math.sin(val);
}

function calcCos(val) {
  return state.isDegree ? Math.cos(toRad(val)) : Math.cos(val);
}

function calcTan(val) {
  const v = state.isDegree ? Math.tan(toRad(val)) : Math.tan(val);
  if (Math.abs(v) > 1e14) return Infinity;
  return v;
}
// ── Fonctions hyperboliques ──────────────────────
function calcSinh(val)  { return Math.sinh(val); }
function calcCosh(val)  { return Math.cosh(val); }
function calcTanh(val)  { return Math.tanh(val); }