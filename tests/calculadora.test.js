const calc = require("../models/calculadora");

test("Somar  2 + 2 deve retornar 4", () => {
  const resultado = calc.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar  5 + 100 deve retornar 105", () => {
  const resultado = calc.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar  'banana' + 100 deve 'Erro'", () => {
  const resultado = calc.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
