let imagenes = [
  {
    url: "img/perros-pag/Chocolate.jpg",
    texto: "Chocolate",
  },
  {
    url: "img/perros-pag/Mora.jpg",
    texto: "Mora",
  },
  {
    url: "img/perros-pag/Homero.jpg",
    texto: "Homero",
  },
  {
    url: "img/perros-pag/Pulgoso.jpeg",
    texto: "Pulgoso",
  },
  {
    url: "img/perros-pag/Mustafar.jpg",
    texto: "Mustafar",
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

