// ── Fonctions logarithmes ────────────────────────
function calcLog(val)   { return Math.log10(val); }
function calcLn(val)    { return Math.log(val); }
function calcLog2(val)  { return Math.log2(val); }
function calcPow10(val) { return Math.pow(10, val); }
function calcExpE(val)  { return Math.exp(val); }
// ── Constantes mathematiques ─────────────────────
const CONST_PI = Math.PI;
const CONST_E  = Math.E;
// ── Puissances et racines ────────────────────────
function calcSquare(val)      { return val * val; }
function calcCube(val)        { return val * val * val; }
function calcSqrt(val)        { return Math.sqrt(val); }
function calcCbrt(val)        { return Math.cbrt(val); }
function calcPow(base, exp)   { return Math.pow(base, exp); }
function calcReciprocal(val)  { return 1 / val; }
// ── Factorielle ──────────────────────────────────
function calcFactorial(n) {
  n = Math.round(n);
  if (n < 0 || n > 170) return Infinity;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
// ── Valeur absolue et arrondi ────────────────────
function calcAbs(val)   { return Math.abs(val); }
function calcFloor(val) { return Math.floor(val); }
function calcCeil(val)  { return Math.ceil(val); }
function calcRound(val) { return Math.round(val); }