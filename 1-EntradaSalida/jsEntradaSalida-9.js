/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo1;
    var aumento = 100/10;
    var resultado;

    sueldo1 = parseInt(document.getElementById("sueldo").value);
    resultado = sueldo1 + aumento;

    document.getElementById("resultado").value = resultado;
    
}
