const nota = parseInt(prompt("ingrese su calificacion del 1 al 10"));
console.log(nota)
switch (nota) {
    case 0:
    case 1:
        case 2:
            document.write(`<p>muy deficiente</p>`);
        break
    case 3:
    case 4:
            document.write(`<p>deficiente</p>`);
        break
    case 5:
    case 6:
            document.write(`<p> Suficiente
</p>`);
        break
    case 7:
            document.write(`<p> Bien
</p>`);
        break
    case 8:
    case 9:
            document.write(`<p> Notable
</p>`);
        break
    case 10:
            document.write(`<p>Sobresaliente</p>`);
        break
        case nota>10:

        document.write(`<p> Número erróneo</p>`)
        default:
            document.write(`<p>Introduce un número válido</p>`);}
    