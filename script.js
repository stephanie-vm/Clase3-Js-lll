/**
 * Ejercicio #3:
 *
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/
  const titulo = document.querySelector('h3');
  console.log(titulo.innerText);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
const primerElementoDeLaLista = document.querySelectorAll('li');
console.log(primerElementoDeLaLista[0].innerText);
const segundoElementoDeLaLista = document.querySelectorAll('li');
console.log(segundoElementoDeLaLista[3].innerText);
/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
const emailInput = document.querySelectorAll('input');
console.log(emailInput[2]);
//console.dir(emailInput[2]);
/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/
const tablaJavaScript = document.querySelectorAll('td');
console.log(tablaJavaScript[3].innerText);

/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
const celdaCss = document.querySelectorAll('td');
console.log(celdaCss[4].innerHTML);
