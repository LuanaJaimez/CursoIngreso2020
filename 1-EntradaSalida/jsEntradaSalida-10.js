/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo1;
    var descuento = 100/25;
    var resultado;

    sueldo1 = parseInt(document.getElementById("importe").value);
    resultado = sueldo1 - descuento;

    document.getElementById("resultado").value = resultado;
}
