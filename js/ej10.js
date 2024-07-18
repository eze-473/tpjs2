const filas = parseInt(prompt("ingrese numero de filas"))
const columnas = parseInt(prompt("ingrese numero de columnas"))
console.log(filas)
console.log(columnas)
let celda = filas * columnas
document.write(` <table><tbody>`)
for( let indicefilas = 0; indicefilas < filas; indicefilas++){
document.write(` <tr>`)
for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++)
    {document.write(` <td> ${celda} </td> `); celda--}
document.write(`</tr>`)}
document.write(`</tbody></table>`)