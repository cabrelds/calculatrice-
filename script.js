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