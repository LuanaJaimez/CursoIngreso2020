function mostrar()
{
    var planeta;

    planeta =  prompt("Ingrese un planeta del sistema solar ").toLowerCase();

    switch(planeta){
        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
            break;
        case "tierra":
            alert("Acá vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Acá hace más frío");
            break;
        default:
            alert("Este no es un planeta válido. Ingrese un planeta del sistema solar");
    }

}//FIN DE LA FUNCIÓN.
/*-sol-
Mercurio.
Venus.
Tierra.
Marte.
Júpiter.
Saturno.
Urano.
Neptuno.*/