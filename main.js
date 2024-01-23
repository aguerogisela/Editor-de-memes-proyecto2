//IMPORTANTE ☆*: .｡. o(≧▽≦)o .｡.:*☆

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
  }
});

// DESCARGAR IMAGEN
downloadBtn.addEventListener("click", () => {
  domtoimage.toBlob(divImg).then((blob) => {
    window.saveAs(blob, "meme.png");
  });
});

//FILTROS ^_____^(￣y▽￣)╭ Ohohoho.....

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

  brillo.addEventListener('change', aplicarFiltros);
  opacidad.addEventListener('change', aplicarFiltros);
  contraste.addEventListener('change', aplicarFiltros);
  desenfoque.addEventListener('change', aplicarFiltros);
  escalaDeGrises.addEventListener('change', aplicarFiltros);
  sepia.addEventListener('change', aplicarFiltros);
  hue.addEventListener('change', aplicarFiltros);
  saturacion.addEventListener('change', aplicarFiltros);
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

})

