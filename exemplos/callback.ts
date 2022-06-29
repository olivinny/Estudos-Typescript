function somarValoresNumericosETratar(
  num1: number,
  num2: number,
  callback: (numero: number) => number
): number {
  let resultado = num1 + num2;
  return callback(resultado);
}
function aoQuadrado(num: number): number {
  return num * num;
}
function dividirPorEleMesmo(num: number): number {
  return num / num;
}
console.log(somarValoresNumericosETratar(2, 5, aoQuadrado));
console.log(somarValoresNumericosETratar(2, 5, dividirPorEleMesmo));
