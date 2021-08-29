/* Escribe un programa que le pida al usuario su nombre, año actual y año de nacimiento.
El programa debe imprimir su nombre y edad actual en la consola con la frase "Hola
Sergio, Tienes X años". */
let nombre = prompt("Ingrese su nombre");
let añoN = parseInt(prompt("Ingrese su año de nacimiento"));
let añoA = parseInt(prompt("Ingrese el año actual"));
let edad = (añoA-añoN);
console.log("Hola " + nombre + " tu edad es: " + edad);