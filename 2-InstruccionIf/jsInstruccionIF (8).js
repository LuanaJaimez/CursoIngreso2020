function mostrar()
{
//tomo la edad  
var edad;
var estadocivil;

edad = parseInt(document.getElementById("edad").value);
estadocivil = document.getElementById("estadoCivil").value;

if(edad >= 18 && estadocivil == "Soltero") {
    alert("Es soltero y no es menor de edad");
}

/*if(edad < 18 && estadocivil != "Soltero"){

}*/
	


}//FIN DE LA FUNCIÓN