// Las variables
const formulario = document.getElementById("formularioCasino");
const aliasInput = document.getElementById("alias");
const edadInput = document.getElementById("edad");
const emailInput = document.getElementById("email");
const juegoSelect = document.getElementById("juego");
const terminosCheck = document.getElementById("terminos");
const btnEnviar = document.getElementById("btnEnviar");
const divResultado = document.getElementById("resultado");
const presupuestoInput = document.getElementById("presupuesto");

// Guardamos las validaciones
const validacion = {
  alias: false,
  edad: false,
  email: false,
  juego: false,
  terminos: false,
  presupuesto: false,
};

// Mostramos el error
const mostrarError = (input, mensaje) => {
  const idError =
    "error" + input.id.charAt(0).toUpperCase() + input.id.slice(1);
  const spanError = document.getElementById(idError);

  spanError.innerText = mensaje;
  input.classList.add("input-error");
  input.classList.remove("input-success");
};

// Para limpiar el error
const limpiarError = (input) => {
  const idError =
    "error" + input.id.charAt(0).toUpperCase() + input.id.slice(1);
  const spanError = document.getElementById(idError);

  spanError.innerText = "";
  input.classList.remove("input-error");
};


// Para validar si el usuario esta haciendo lo correcto

aliasInput.addEventListener("blur", () => {
  if (aliasInput.value.trim() === "") {
    mostrarError(aliasInput, "¡El alias no puede estar vacío!");
    validacion.alias = false;
  } else {
    limpiarError(aliasInput);
    validacion.alias = true;
  }
});

edadInput.addEventListener("blur", () => {
  // Comprobamos la edad
  if (edadInput.value === "" || edadInput.value < 18) {
    mostrarError(edadInput, "Debes ser mayor de 18 años para apostar.");
    validacion.edad = false;
  } else {
    limpiarError(edadInput);
    validacion.edad = true;
  }
});

emailInput.addEventListener("blur", () => {
  // Validación simple de email (debe tener @ y .)
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    mostrarError(emailInput, "Introduce un email válido (ej: user@mail.com)");
    validacion.email = false;
  } else {
    limpiarError(emailInput);
    validacion.email = true;
  }
});

// Limpiamos el error para darle otra oportunidad al usuario.
const inputs = [aliasInput, edadInput, emailInput, juegoSelect];
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    limpiarError(input);
  });
});

// Validación del Select ("Tu Juego de la Suerte")
juegoSelect.addEventListener("change", () => {
  if (juegoSelect.value === "") {
    mostrarError(juegoSelect, "Selecciona una mesa para jugar.");
    validacion.juego = false;
  } else {
    limpiarError(juegoSelect);
    validacion.juego = true;
  }
});

// Validación del presupuesto ("Tu Juego de la Suerte")
presupuestoInput.addEventListener("blur", () => {
  // Regla: No puede estar vacío y mínimo 50€
  if (presupuestoInput.value === "" || presupuestoInput.value < 50) {
    mostrarError(presupuestoInput, "El ingreso mínimo son 50€ (no me fio).");
    validacion.presupuesto = false;
  } else {
    limpiarError(presupuestoInput);
    validacion.presupuesto = true;
  }
});

// Limpiar error al hacer focus
presupuestoInput.addEventListener("focus", () => {
  limpiarError(presupuestoInput);
});

// Cambia el boton
btnEnviar.addEventListener("mouseover", () => {
  if (!btnEnviar.disabled) btnEnviar.innerText = " REAPOSTAR !!!";
});

// Devolvemos el boton a la normalidad
btnEnviar.addEventListener("mouseout", () => {
  btnEnviar.innerText = "ENTRAR AL CASINO";
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitamos que se recargue la página

  // Validación final de los términos
  if (!terminosCheck.checked) {
    document.getElementById("errorTerminos").innerText =
      "Debes aceptar los términos para entrar.";
    validacion.terminos = false;
  } else {
    document.getElementById("errorTerminos").innerText = "";
    validacion.terminos = true;
  }

  // Forzamos validación de los otros campos si el usuario no entró en ellos
  if (!validacion.alias) aliasInput.focus(), aliasInput.blur();
  if (!validacion.edad) edadInput.focus(), edadInput.blur();
  if (!validacion.email) emailInput.focus(), emailInput.blur();
  if (juegoSelect.value === "") {
    mostrarError(juegoSelect, "Elige un juego");
    validacion.juego = false;
  }
  if (!validacion.presupuesto)
    presupuestoInput.focus(), presupuestoInput.blur();
  else validacion.presupuesto = true;

  // Comprobacion final
  if (
    validacion.alias &&
    validacion.edad &&
    validacion.email &&
    validacion.juego &&
    validacion.terminos &&
    validacion.presupuesto
  ) {


    // En caso de Éxito: Ocultamos form y mostramos resumen
    formulario.style.display = "none";
    divResultado.classList.remove("oculto");

    divResultado.innerHTML = `
            <h2>¡Bienvenido al Casino, ${aliasInput.value}! </h2>
    <p>Fichas enviadas a: <strong>${emailInput.value}</strong></p>
    <p>Tu mesa de <strong>${
      juegoSelect.options[juegoSelect.selectedIndex].text
    }</strong> está lista.</p>
    
    <p>Saldo inicial: <strong>${presupuestoInput.value}€</strong></p>
    
    <p style="color: #d4af37; margin-top:10px; font-size: 1.2rem;">¡Buena suerte!</p>
    <button onclick="location.reload()" style="margin-top:20px;">Volver a Jugar</button>
        `;
  }
});
