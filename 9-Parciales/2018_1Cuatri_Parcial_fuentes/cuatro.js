function mostrar()
{
    var primerNumero;
    var segundoNumero;

    primerNumero = prompt("Ingrese el primer numero");
    segundoNumero = prompt("Ingrese el segundo numero");
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);

    if(primerNumero == segundoNumero){
        alert("Los numeros son " + primerNumero + " y " + segundoNumero);
    }
    else if(primerNumero > segundoNumero){
        primerNumero = primerNumero - segundoNumero;
        alert("La resta es " + primerNumero);
    }
    else{
        primerNumero = primerNumero + segundoNumero;
        if(primerNumero > 10){
            alert("La suma es " + primerNumero + " y supero el 10");
        }
        else{
            alert("La suma es " + primerNumero);
        }
    }
}
