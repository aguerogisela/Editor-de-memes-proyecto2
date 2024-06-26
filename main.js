// ☆*: .｡. o(≧▽≦)o .｡.:*☆

//----✍️(◔◡◔)––––IMPORTANTE––HEADER––MAIN–––––—>—<

// MODO OSCURO
const modoOscuro = () => {
	document.body.classList.toggle("dark-mode");
};
// INSERTAR IMAGEN
const divImg = document.getElementById("image");
const fileInput = document.getElementById("fileInput");
const downloadBtn = document.getElementById("downloadBtn");
const inputColor = document.getElementById("inputColor");

fileInput.addEventListener("change", (e) => {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			const imgElement = document.getElementById("imgTag");
			imgElement.src = e.target.result;
		};
		reader.readAsDataURL(file);
		console.log(file);
	}
});

//--------IMAGEN-------(❤️ ω ❤️)---------

// DESCARGAR IMAGEN
downloadBtn.addEventListener("click", () => {
	domtoimage.toBlob(divImg).then((blob) => {
		window.saveAs(blob, "meme.png");
	});
});

//FILTROS ^_____^ .....

const img = document.querySelector(".img");
const brillo = document.getElementById("brightnessFiltro");
const opacidad = document.getElementById("opacityFiltro");
const contraste = document.getElementById("contrastFiltro");
const desenfoque = document.getElementById("blurFiltro");
const escalaDeGrises = document.getElementById("grayscaleFiltro");
const sepia = document.getElementById("sepiaFiltro");
const hue = document.getElementById("hueFiltro");
const saturacion = document.getElementById("saturateFiltro");

const aplicarFiltros = () => {
	img.style.filter = `
      brightness(${brillo.value})
      opacity(${opacidad.value})
      contrast(${contraste.value}%)
      blur(${desenfoque.value}px)
      grayscale(${escalaDeGrises.value}%)
      sepia(${sepia.value}%)
      hue-rotate(${hue.value}deg)
      saturate(${saturacion.value}%)
    `;
};
// invert(${invertir.value})

brillo.addEventListener("change", aplicarFiltros);
opacidad.addEventListener("change", aplicarFiltros);
contraste.addEventListener("change", aplicarFiltros);
desenfoque.addEventListener("change", aplicarFiltros);
escalaDeGrises.addEventListener("change", aplicarFiltros);
sepia.addEventListener("change", aplicarFiltros);
hue.addEventListener("change", aplicarFiltros);
saturacion.addEventListener("change", aplicarFiltros);
// invertir.addEventListener('change', aplicarFiltros);

const restablecerFiltrosBtn = document.querySelector(".restablecer-filtros");

restablecerFiltrosBtn.addEventListener("click", () => {
	// Restablecer los valores de los controles deslizantes
	brillo.value = 1;
	opacidad.value = 1;
	contraste.value = 100;
	desenfoque.value = 0;
	escalaDeGrises.value = 0;
	sepia.value = 0;
	hue.value = 0;
	saturacion.value = 100;
	// invertir.value = 1;

	aplicarFiltros();

	///corregir el error de invertir!!!!!!
});

//====Textarea y meme
const actualizarTextoSuperior = () => {
	const textoSuperior = document.getElementById(
		"texto-superior-textarea"
	).value;
	document.getElementById("texto-superior").innerText = textoSuperior;
};

const actualizarTextoInferior = () => {
	const textoInferior = document.getElementById(
		"texto-inferior-textarea"
	).value;
	document.getElementById("texto-inferior").innerText = textoInferior;
};

//ººººººººº------CHECKBOX---º

const aparecerDesaparecer = () => {
	var checkBoxd = document.getElementById("superior-check");
	var text = document.getElementById("texto-superior");
	if (checkBoxd.checked == true) {
		text.style.display = "none";
	} else {
		text.style.display = "block";
	}
};

const aparecerDesaparecerdos = () => {
	var checkBoxu = document.getElementById("inferior-check");
	var texto = document.getElementById("texto-inferior");
	if (checkBoxu.checked == true) {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
};

//BACKGROUND .............

document.getElementById("colorFondo").addEventListener("input", () => {
	const colorFondoSeleccionado = document.getElementById("colorFondo").value;

	document.querySelectorAll(".texto-meme").forEach((elemento) => {
		elemento.style.backgroundColor = colorFondoSeleccionado;
	});
	document.getElementById("background-color").innerText =
		colorFondoSeleccionado;
	console.log(colorFondoSeleccionado);
});

// ---------- COLOR TEXTO-----
document.getElementById("colorTexto").addEventListener("input", () => {
	const colorTextoSeleccionado = document.getElementById("colorTexto").value;
	document.querySelectorAll(".texto-meme").forEach((elemento) => {
		elemento.style.color = colorTextoSeleccionado;
	});
	document.getElementById("text-background-color").innerText =
		colorTextoSeleccionado;
	console.log(colorTextoSeleccionado.value);
});

//----------TAMAÑO DE FUENTE
const cambiarTamañoFuente = () => {
	const tamañoFuente = document.getElementById("tamañoFuente").value;
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");

	textoSuperior.style.fontSize = `${tamañoFuente}px`;
	textoInferior.style.fontSize = `${tamañoFuente}px`;
};

//----------------CONTORNO

// // Funciones para cambiar el contorno del texto meme
// const aplicarContorno = (estiloContorno) => {
// 	// Obtén el elemento del texto meme
// 	const textoSuperior = document.getElementById("texto-superior");
// 	const textoInferior = document.getElementById("texto-inferior");

// 	// Actualiza el estilo del contorno
// 	textoSuperior.style.webkitTextStroke = estiloContorno;
// 	textoInferior.style.webkitTextStroke = estiloContorno;
// };

//------------------ESPACIADO

const cambiarEspaciado = () => {
	const espaciadoInput = document.getElementById("espaciadoInput").value;
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");

	textoSuperior.style.padding = `${espaciadoInput}px`;
	textoInferior.style.padding = `${espaciadoInput}px`;
};

//--------------------INTERLINEADO

const cambiarInterlineado = () => {
	const interlineado = document.getElementById("seleccionarInterlineado");
	const selectedInterli =
		interlineado.options[interlineado.selectedIndex].value;

	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");

	textoSuperior.style.lineHeight = selectedInterli;
	textoInferior.style.lineHeight = selectedInterli;
};
//-----ALINEACION
const alignLeftBtn = document.getElementById("alignLeft");
const alignRightBtn = document.getElementById("alignRight");
const alignCenterBtn = document.getElementById("alignCenter");

alignLeftBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");
	textoSuperior.style.textAlign = "left";
	textoInferior.style.textAlign = "left";
});

alignRightBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");
	textoSuperior.style.textAlign = "right";
	textoInferior.style.textAlign = "right";
});

alignCenterBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");
	textoSuperior.style.textAlign = "center";
	textoInferior.style.textAlign = "center";
});

///---------------CAMBIAR TIPOGRAFIA----
const selectElement = document.getElementById("dropdown");

selectElement.addEventListener("change", function () {
	const selectedFont = this.value;
	document.body.style.fontFamily = selectedFont;
});

//contorno

const claroContorno = () => {
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");
	textoSuperior.style.textShadow = "0px 1px 4px #23430C";
	textoSuperior.style.webkitTextStroke = "1px #F8F8F8";
	textoInferior.style.textShadow = "0px 1px 4px #23430C";
	textoInferior.style.webkitTextStroke = "1px #F8F8F8";
};

const oscuroContorno = () => {
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");
	textoSuperior.style.textShadow = "0px 2px 4px red";
	textoSuperior.style.webkitTextStroke = "2px black";
	textoInferior.style.textShadow = "0px 2px 4px red";
	textoInferior.style.webkitTextStroke = "2px black";
};

const noContorno = () => {
	// Selecciona el elemento de texto
	const textoSuperior = document.getElementById("texto-superior");
	const textoInferior = document.getElementById("texto-inferior");

	// Elimina los estilos de sombra y borde del texto
	textoSuperior.style.textShadow = "none";
	textoSuperior.style.webkitTextStroke = "none";
	textoInferior.style.textShadow = "none";
	textoInferior.style.webkitTextStroke = "none";
};

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector("a[href='#editarimagen']")
		.addEventListener("click", (event) => {
			event.preventDefault();
			var aside = document.querySelector(".asideuno");
			if (aside.style.display === "none" || aside.style.display === "") {
				aside.style.display = "flex";
			} else {
				aside.style.display = "none";
			}
		});

	document
		.querySelector("a[href='#editartexto']")
		.addEventListener("click", (event) => {
			event.preventDefault();
			var asidedos = document.querySelector(".asidedos");
			if (asidedos.style.display === "none" || asidedos.style.display === "") {
				asidedos.style.display = "flex";
			} else {
				asidedos.style.display = "none";
			}
		});
});
