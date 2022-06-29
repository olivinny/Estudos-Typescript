let anyVoltou: any;
anyVoltou = 3;
anyVoltou = "teste";
anyVoltou = 5;

let stringTest: string = "verificar";
stringTest = anyVoltou;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";

let stringTest2: string = "agora vai";

if (typeof unknownValor === "string") {
  stringTest2 = unknownValor;
}
console.log(stringTest2);

function jogaErro(erro: string, codigo: number): never {
  throw { erro: erro, code: codigo };
}
jogaErro("deu erro", 500);
