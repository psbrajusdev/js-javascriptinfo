console.log("-----------------Alertas-----------------");
/* Hay tres tipos de alertas:
alert
promt
confirm
Son modales, que dependen del navegador y mientras esten se corta el flujo del codigo y el usuario no puede itneractuar con la pagina

*/

alert("Hola esto es una alerta");
let nombre = prompt("Cual es tu nombre?", "Sin nombre");
alert("Tu nombre es : " + nombre);
console.log(nombre);

result = confirm("Estas seguro de querer continuar?");

if (result) {
  alert("El usuario puso ok");
  console.log(result);
} else {
  alert("El usuario puso cancelar");
  console.log(result);
}
