function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
while (isNaN(repeticiones)){
    repeticiones = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
}
for(var cant = 0; cant < repeticiones; cant++){
    document.write("Hola UTN FRA" + "</br>");
    //alert("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN