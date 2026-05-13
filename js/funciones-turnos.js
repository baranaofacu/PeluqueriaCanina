// Array para guardar los turnos en memoria
const datos = localStorage.getItem("turnos_pelitos");
const turnosGuardados = datos ? JSON.parse(datos) : [];

document.addEventListener("DOMContentLoaded", () => {
  const miFormulario = document.getElementById("form-turno");

  if (miFormulario) {
    miFormulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); 

      if (validarFormulario()) {
        const nuevoTurno = {
          duenio: document.getElementById("duenio").value,
          mascota: document.getElementById("mascota").value,
          servicio: document.getElementById("servicio").value,
          fecha: document.getElementById("fecha").valuea,
          hora: document.getElementById("hora").value
        };

        turnosGuardados.push(nuevoTurno);
        localStorage.setItem('turnos_pelitos', JSON.stringify(turnosGuardados));
        console.log("Turnos guardados en LocalStorage");

        const confirmacion = document.getElementById("confirmacion");
        confirmacion.textContent = `¡Turno para ${nuevoTurno.mascota} confirmado!`;
        confirmacion.classList.add("visible");

        miFormulario.reset();
      }
    });
  }
});

function mostrarError(idParrafo, mensaje, idInput) {
  const parrafo = document.getElementById(idParrafo);
  const input = document.getElementById(idInput);
  if (parrafo) {
    parrafo.textContent = mensaje;
    parrafo.classList.add("visible");
  }
  if (input) {
    input.classList.add("invalido");
  }
}

function validarFormulario() {
  let esValido = true;

  // Limpiar estados previos
  document.querySelectorAll(".error-msg").forEach(p => {
    p.textContent = "";
    p.classList.remove("visible");
  });
  document.querySelectorAll("input, select").forEach(i => i.classList.remove("invalido"));

  // 1. Nombre Dueño 
  const duenio = document.getElementById("duenio").value.trim();
  const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (duenio.length < 2 || !regexLetras.test(duenio)) {
    mostrarError("err-duenio", "El nombre debe tener al menos 2 letras y no contener números.", "duenio");
    esValido = false;
  }

  // 2. Nombre Mascota 
  const mascota = document.getElementById("mascota").value.trim();
  if (mascota.length < 2) {
    mostrarError("err-mascota", "El nombre de la mascota debe tener al menos 2 caracteres.", "mascota");
    esValido = false;
  }

  // 3. Servicio 
  const servicio = document.getElementById("servicio").value;
  if (servicio === "") {
    mostrarError("err-servicio", "Seleccioná un servicio.", "servicio");
    esValido = false;
  }

  // 4. Fecha 
  const fechaInput = document.getElementById("fecha").value;
  const hoy = new Date().toISOString().split('T')[0];
  if (!fechaInput || fechaInput < hoy) {
    mostrarError("err-fecha", "La fecha no puede ser anterior a hoy.", "fecha");
    esValido = false;
  }

  // 5. Hora 
  const hora = document.getElementById("hora").value;
  if (!hora) {
    mostrarError("err-hora", "Elegí una hora.", "hora");
    esValido = false;
  } else if (hora < "08:00" || hora > "20:30") {
    mostrarError("err-hora", "Horario de atención: 08:00 a 20:30 hs.", "hora");
    esValido = false;
  }

  return esValido;
}