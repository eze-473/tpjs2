const numero = parseInt(prompt("ingrese un numero no mayor de 50"));
console.log(numero)
for (let columnas = 1; columnas <= numero; columnas++) {
    for (let repeticion = 1; repeticion <= columnas; repeticion++) {
        document.write(`${repeticion}`);
    }
    document.write('<br>');
}