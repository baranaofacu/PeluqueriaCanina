// Al cargar la pag leemos los turnos del localStorage
document.addEventListener("DOMContentLoaded", function () {
  // Buscamos los turnos guardados
  const datos = localStorage.getItem("turnos_pelitos");
  let turnos;

  if (datos) {
    turnos = JSON.parse(datos);
  } else {
    turnos = [];
  }

  const lista = document.getElementById("lista-turnos");
  const sinTurnos = document.getElementById("sin-turnos");

  // Si no hay turnos mostramos el mensaje y terminamos
  if (turnos.length === 0) {
    sinTurnos.style.display = "block";
    return;
  }

  // Si hay turnos ocultamos el mensaje
  sinTurnos.style.display = "none";

  // Por cada turno creamos una tarjeta
  turnos.forEach(function (turno) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-turno");

    tarjeta.innerHTML = `
      <p class="turno-nombre">${turno.duenio}</p>
      <p>Mascota: <strong>${turno.mascota}</strong></p>
      <p class="turno-servicio">Servicio: ${turno.servicio}</p>
      <p>Fecha: ${turno.fecha}</p>
      <p>Hora: ${turno.hora}</p>
    `;

    lista.appendChild(tarjeta);
  });
});
