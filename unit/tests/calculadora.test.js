const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retonar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado).toBe(4);
});

test("somar 5 + 100 deveria retonar 105", () => {
  const resultado = calculadora.somar(5, 105);
  console.log(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retonar 'Erro'", () => {
  const resultado = calculadora.somar(5, 105);
  console.log(resultado).toBe(105);
});
