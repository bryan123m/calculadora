function operacion () {
	var B = prompt("seleccione el tipo de operacion: \nA para calcular el volumen del cilindro,\nB para convertir onzas a toneladas,\n para factorizar un numero");
	return B;
}

function cilindro () {
	var radio = prompt("cual es el radio del cilindro?");
	var altura = promt("cual es la altura del cilindro?");
	var resultado = Math.PI * radio * radio * altura;
	alert("el volumen del cilindro es" + resultado.tofixed(5));
} 

function onzasToneladas () {
	var onzas = prompt("ingrese el valor de onzas a convertir");
	var resultadoOnzas = onzas * 1 / 35.275 * 1 / 1000;
	alert(onzas + "onzas equivalen a" + resultadoOnzas.tofixed(5) + "toneladas");
} 

function factorial () {
	var numeroFactorizar = promt("ingrese el numero a factorizar");
	var acomulador = 1;
	for(var contador =2; contador <= numeroFactorizar++) {
		acomulador *= contador;
		alert("el resultado de la factorizacion es" + acomulador);
	}

}

operacion ();

	if (operacion1 === "A") {
		cilindro();
	}
	else if (operacion2 === "B") {
		onzasToneladas();
	}
	else if (operacion3 === "C") {
		factorial();
	}
	else {
		alert("no seleccionaste ninguna operacion");
	}