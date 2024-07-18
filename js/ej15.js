const frase = prompt("ingrese una frase")
let  contarvocales = 0
for(let caracter = 0; caracter < frase.length; caracter++ ){
if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u"
  )
{
    contarvocales++
}}
  document.write(`El número de vocales en la frase es: ${contarvocales}`);