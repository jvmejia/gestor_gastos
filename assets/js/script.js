let listaNombresGastos = [];
let listaValoresGastos = [];

//Funcion se invoca al momento que el usuario haga clic en el boton
function clickBoton() {
	let htmlLista = "";
	let nombreGasto = document.getElementById("nombreGasto").value;
	let valorGasto = document.getElementById("valorGasto").value;

	listaNombresGastos.push(nombreGasto);
	listaValoresGastos.push(valorGasto);

	console.log(listaNombresGastos);
	console.log(listaValoresGastos);
	actualizarListaDeGastos();
}

function actualizarListaDeGastos() {
	const listaElementos = document.getElementById("listaDeGastos");
	const sumaGastos = document.getElementById("totalGastos");
	let htmlLista = "";
	let totalGastos = 0;
	listaNombresGastos.forEach((elemento, posicion) => {
		const valorGasto = Number(listaValoresGastos[posicion]);
		htmlLista += `<li> ${elemento} - $${valorGasto.toFixed(2)}USD 
                    <button class ="imagen-borrar" onclick="eliminarGasto();"></button>
                    <button onclick="clickBoton($(posicion));">Agregar Gasto</button>

        </li>`;

		//Calculamos el total de gastos
		totalGastos += Number(valorGasto);
		console.log(totalGastos);
	});
	listaElementos.innerHTML = htmlLista;
	sumaGastos.innerHTML = totalGastos.toFixed(2);
	limpiar();
	//console.log(htmlLista);
}

function limpiar() {
	document.getElementById("nombreGasto").value = "";
	document.getElementById("valorGasto").value = "";
}

function eliminarGasto(posicion) {
	console.log(posicion);
	listaNombresGastos.splice(posicion, 1);
	listaNombresGastos.splice(posicion, 1);
	actualizarListaDeGastos();
}
