function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño){
    case "Diciembre":
    case "Enero":
    case "Febrero":
        alert("Ya pasamos el frío, ahora calor!!!.");
         break;
    
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frío");
        break;

        /*case "Septiembre":
    case "Octubre":
    case "Noviembre":*/
    //Puede ser remplazado por defauld, porque es lo que queda. Es lo mismo que pasa con Else.
    default:
        alert("Falta para el invierno.");
        break;
}
    


}//FIN DE LA FUNCIÓN