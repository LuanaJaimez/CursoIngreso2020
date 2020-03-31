function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    
    case "Diciembre":
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        alert("Este mes tiene 30 o más días.");
        break;

    case "Febrero":
    default:
        alert("Este mes no tiene más de 29 días.");
         break;

/*Forma simplificada:
switch(mesDelAño) {
    case "Febrero":
        alert("Este mes no tiene más de 29 días.");
        break;
    default:
        alert("Este mes tiene 30 o más días");
        }*/
    
}


}//FIN DE LA FUNCIÓN