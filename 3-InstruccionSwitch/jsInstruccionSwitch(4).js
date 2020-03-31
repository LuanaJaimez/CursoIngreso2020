function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    
    case "Diciembre":
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto": 
    case "Octubre":
        alert("Este mes tiene 31 días");
        break;
    
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("Este mes tiene 30 días.");
        break;

    case "Febrero":
    default:
        alert("Este mes tiene 28 días.");
         break;
    
}



}//FIN DE LA FUNCIÓN