function mostrar()
{
		//Genero el número RANDOM entre 1 y 10 
	var examen;
	var numero;
	
	numero = 10;
	examen = Math.ceil(Math.random ()* numero);

	if(examen == 9 || examen == 10){
		alert("EXCELENTE: "+examen);
	}
	else if (examen >=4 && examen <=8){
		alert("APROBÓ: "+examen);
	}
	else {
		alert("Vamos, la proxima se puede: "+examen);
	}
	 
	

}//FIN DE LA FUNCIÓN