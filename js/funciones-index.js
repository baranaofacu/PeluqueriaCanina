let imagenes = [
  {
    url: "img/servicio1.jpg",
    texto: "Desenredado y cepillado",
  },
  {
    url: "img/servicio2.jpg",
    texto: "Corte de pelo personalizado",
  },
  {
    url: "img/servicio3.jpg",
    texto: "Baño y secado",
  },
  {
    url: "img/servicio4.jpg",
    texto: "Corte de uñas",
  },
  {
    url: "img/servicio5.jpg",
    texto: "Limpieza de oídos",
  },
];

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let texto = document.getElementById("texto");
let puntos = document.getElementById("puntos");
let imagen = document.getElementById("img");
let indice = 0;
posicionCarrusel();

atras.addEventListener("click", function () {
  indice--;
  if (indice == -1) {
    indice = imagenes.length - 1;
  }
  imagen.innerHTML = `<img class="img" src="${imagenes[indice].url}"  loading="lazy"></img>`;
  texto.innerHTML = `<h3>${imagenes[indice].texto}</h3>`;
  posicionCarrusel();
});

adelante.addEventListener("click", function () {
  indice++;
  if (indice == imagenes.length) {
    indice = 0;
  }
  imagen.innerHTML = `<img class="img" src="${imagenes[indice].url}"  loading="lazy"></img>`;
  texto.innerHTML = `<h3>${imagenes[indice].texto}</h3>`;
  posicionCarrusel();
});

function posicionCarrusel() {
  puntos.innerHTML = "";
  for (var i = 0; i < imagenes.length; i++) {
    if (i == indice) {
      puntos.innerHTML += `<p class="bold">.</p>`;
    } else {
      puntos.innerHTML += `<p>.</p>`;
    }
  }
}

/* ------------------------------------------------------------------------------------- */

