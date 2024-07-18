const edad = parseInt(prompt("ingrese su edad"));
console.log(edad)
if(edad >=18 && edad < 200){
    document.write("puede condusir")
}else{
    if(edad <= 18 ){
        document.write("no puede conducir")
    }
else{
    document.write("numero no valido")
}}