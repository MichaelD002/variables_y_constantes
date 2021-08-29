/*Escribe un programa que le pida al usuario su peso y su altura para calcular su IMC e
imprima la frase "Tu IMC es X". */
let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrese su estatura"));
let alt= (altura*altura);
let IMC = (peso/alt);
console.log("Tu Indice de Masa Corporal es: " + IMC);