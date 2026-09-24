// Pequena função utilitária para calcular IMC (peso em kg, altura em metros)
export function calculateIMC(peso, altura) {
  if (!peso || !altura) return 0;
  try {
    const p = parseFloat(String(peso).replace(',', '.'));
    const a = parseFloat(String(altura).replace(',', '.'));
    if (!p || !a) return 0;
    const imc = p / (a * a);
    if (!isFinite(imc)) return 0;
    return imc;
  } catch (e) {
    return 0;
  }
}

export default calculateIMC;
