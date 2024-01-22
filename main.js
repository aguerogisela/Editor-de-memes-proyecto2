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



