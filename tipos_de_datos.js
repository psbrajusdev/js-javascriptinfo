console.log("-----------------------Tipos de Datos-----------------------");

/*Notas:
Hay 8 tipos de datos
1 - Number
2 - BigInt
3 - String , estan ' , " o ` (backticks)´
4 -  Bolean , true o false
5 -  null , ausencia de valor
6 -  undefined , valor no asignado
7 -  Object , coleccion de datos
8 -  Symbol , valor unico e inmutable_ */

typeof typeof1; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

function mostrarTipos() {
  const valores = [
    undefined,
    0,
    10n,
    true,
    "foo",
    Symbol("id"),
    Math,
    null,
    alert,
  ];

  valores.forEach((valor) => {
    console.log(typeof valor);
  });
}

mostrarTipos();
