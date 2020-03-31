function mostrar()
{
    var numero;
    var resto;
    var primo;

    numero = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numero)){
    numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
}

    for(var i=1; i < numero; i++){
        resto = numero % i;
        if(resto == 0 && (i != numero && i != 1)){
            primo = false;
            i = numero;
        }
        else{
            primo = true;
        }
    }
    
    if(primo == true) {
        alert(numero + " es primo");
    }
     else {
        alert(numero + " no es primo.");
    }

}//FIN DE LA FUNCIÓN