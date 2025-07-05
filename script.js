// Esperamos a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos el formulario y el área de resultados
  const form = document.getElementById("geneticForm");
  const resultado = document.getElementById("resultado");

  // Cuando se envía el formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // Obtenemos los valores del formulario
    const padreOjos = document.getElementById("padreOjos").value;
    const madreOjos = document.getElementById("madreOjos").value;

    const padreCabello = document.getElementById("padreCabello").value;
    const madreCabello = document.getElementById("madreCabello").value;

    const padreDensidad = document.getElementById("padreDensidad").value;
    const madreDensidad = document.getElementById("madreDensidad").value;

    const padreNariz = document.getElementById("padreNariz").value;
    const madreNariz = document.getElementById("madreNariz").value;

    const padreContextura = document.getElementById("padreContextura").value;
    const madreContextura = document.getElementById("madreContextura").value;

    const padrePiel = document.getElementById("padrePiel").value;
    const madrePiel = document.getElementById("madrePiel").value;

    const alturaPadre = parseFloat(document.getElementById("alturaPadre").value);
    const alturaMadre = parseFloat(document.getElementById("alturaMadre").value);

    const sexoHijo = document.getElementById("sexoHijo").value;


    // Color de ojos
    const ojos = calcularColorOjos(padreOjos, madreOjos);

    // Tipo de cabello
    const cabello = calcularCabello(padreCabello, madreCabello);

    // Densidad de cabello
    const densidad = calcularDensidad(padreDensidad, madreDensidad);

    // Tamaño de nariz
    const nariz = calcularNariz(padreNariz, madreNariz);

    // Contextura
    const contextura = calcularContextura(padreContextura, madreContextura);

    // Tono de piel
    const piel = calcularPiel(padrePiel, madrePiel);

    // Altura (como es ejemplo, diremos que es niño)
    const altura = calcularEstatura(alturaPadre, alturaMadre, sexoHijo);

    
    

    // Mostramos el resultado
    resultado.innerHTML = `
  <h3>🧬 Predicción genética</h3>
  <div class="resultado-grid">
    <div class="result-card">
      <h4>👁️ Color de ojos</h4>
      <p>${ojos}</p>
    </div>
    <div class="result-card">
      <h4>💇‍♂️ Tipo de cabello</h4>
      <p>${cabello}</p>
    </div>
    <div class="result-card">
      <h4>🧠 Densidad de cabello</h4>
      <p>${densidad}</p>
    </div>
    <div class="result-card">
      <h4>👃 Tamaño de nariz</h4>
      <p>${nariz}</p>
    </div>
    <div class="result-card">
      <h4>🏋️‍♀️ Contextura</h4>
      <p>${contextura}</p>
    </div>
    <div class="result-card">
      <h4>🧑🏽 Tono de piel</h4>
      <p>${piel}</p>
    </div>
    <div class="result-card estatura">
      <h4>📏 Estatura estimada</h4>
      <p><strong>${altura} cm</strong></p>
    </div>
  </div>
`;

  });

  // FUNCIONES AUXILIARES

  // Calcula color de ojos con dominancia simple
  function calcularColorOjos(p1, p2) {
  if (p1 === "marron" && p2 === "marron") {
    return "75% Marrón, 18% Verde, 7% Azul";
  } else if ((p1 === "marron" && p2 === "verde") || (p1 === "verde" && p2 === "marron")) {
    return "50% Marrón, 37% Verde, 13% Azul";
  } else if ((p1 === "marron" && p2 === "azul") || (p1 === "azul" && p2 === "marron")) {
    return "50% Marrón, 50% Azul";
  } else if (p1 === "verde" && p2 === "verde") {
    return "75% Verde, 25% Azul";
  } else if ((p1 === "verde" && p2 === "azul") || (p1 === "azul" && p2 === "verde")) {
    return "50% Verde, 50% Azul";
  } else if (p1 === "azul" && p2 === "azul") {
    return "99% Azul, 1% Verde";
  } else {
    return `Datos desconocidos (${p1} y ${p2})`;
  }
}


  // Calcula tipo de cabello
  function calcularCabello(p1, p2) {
  if (p1 === "liso" && p2 === "liso") {
    return "90% Liso, 10% Ondulado";
  } else if (
    (p1 === "liso" && p2 === "ondulado") ||
    (p1 === "ondulado" && p2 === "liso")
  ) {
    return "50% Liso, 50% Ondulado";
  } else if (
    (p1 === "liso" && p2 === "rizado") ||
    (p1 === "rizado" && p2 === "liso")
  ) {
    return "25% Liso, 50% Ondulado, 25% Rizado";
  } else if (p1 === "ondulado" && p2 === "ondulado") {
    return "10% Liso, 80% Ondulado, 10% Rizado";
  } else if (
    (p1 === "ondulado" && p2 === "rizado") ||
    (p1 === "rizado" && p2 === "ondulado")
  ) {
    return "25% Ondulado, 75% Rizado";
  } else if (p1 === "rizado" && p2 === "rizado") {
    return "90% Rizado, 10% Ondulado";
  } else {
    return `Datos desconocidos (${p1} y ${p2})`;
  }
}

  //calcular densidad de cabello
  function calcularDensidad(p1, p2) {
  if (p1 === "abundante" && p2 === "abundante") {
    return "80% Abundante, 20% Media";
  } else if (
    (p1 === "abundante" && p2 === "media") ||
    (p1 === "media" && p2 === "abundante")
  ) {
    return "60% Abundante, 40% Media";
  } else if (
    (p1 === "abundante" && p2 === "poca") ||
    (p1 === "poca" && p2 === "abundante")
  ) {
    return "40% Media, 60% Poca";
  } else if (p1 === "media" && p2 === "media") {
    return "70% Media, 30% Abundante o Poca";
  } else if (
    (p1 === "media" && p2 === "poca") ||
    (p1 === "poca" && p2 === "media")
  ) {
    return "30% Media, 70% Poca";
  } else if (p1 === "poca" && p2 === "poca") {
    return "85% Poca, 15% Media";
  } else {
    return `Datos desconocidos (${p1} y ${p2})`;
  }
}

  //calcular tamaño de nariz
  function calcularNariz(p1, p2) {
  if (p1 === "grande" && p2 === "grande") {
    return "80% Grande, 20% Media";
  } else if (
    (p1 === "grande" && p2 === "media") ||
    (p1 === "media" && p2 === "grande")
  ) {
    return "50% Grande, 50% Media";
  } else if (
    (p1 === "grande" && p2 === "pequena") ||
    (p1 === "pequena" && p2 === "grande")
  ) {
    return "50% Media, 50% Grande";
  } else if (p1 === "media" && p2 === "media") {
    return "80% Media, 10% Grande, 10% Pequeña";
  } else if (
    (p1 === "media" && p2 === "pequena") ||
    (p1 === "pequena" && p2 === "media")
  ) {
    return "60% Media, 40% Pequeña";
  } else if (p1 === "pequena" && p2 === "pequena") {
    return "85% Pequeña, 15% Media";
  } else {
    return `Datos desconocidos (${p1} y ${p2})`;
  }
}

  //calcular contextura
  function calcularContextura(p1, p2) {
  if (p1 === "gruesa" && p2 === "gruesa") {
    return "85% Gruesa, 15% Media";
  } else if (
    (p1 === "gruesa" && p2 === "media") ||
    (p1 === "media" && p2 === "gruesa")
  ) {
    return "60% Gruesa, 40% Media";
  } else if (
    (p1 === "gruesa" && p2 === "delgada") ||
    (p1 === "delgada" && p2 === "gruesa")
  ) {
    return "50% Media, 50% Gruesa";
  } else if (p1 === "media" && p2 === "media") {
    return "70% Media, 15% Gruesa, 15% Delgada";
  } else if (
    (p1 === "media" && p2 === "delgada") ||
    (p1 === "delgada" && p2 === "media")
  ) {
    return "60% Media, 40% Delgada";
  } else if (p1 === "delgada" && p2 === "delgada") {
    return "85% Delgada, 15% Media";
  } else {
    return `Datos desconocidos (${p1} y ${p2})`;
  }
}

  //calcular tono de piel
  function calcularPiel(p1, p2) {
  if (p1 === "clara" && p2 === "clara") {
    return "90% Clara, 10% Media";
  } else if (
    (p1 === "clara" && p2 === "media") ||
    (p1 === "media" && p2 === "clara")
  ) {
    return "50% Clara, 50% Media";
  } else if (
    (p1 === "clara" && p2 === "oscura") ||
    (p1 === "oscura" && p2 === "clara")
  ) {
    return "25% Clara, 50% Media, 25% Oscura";
  } else if (p1 === "media" && p2 === "media") {
    return "80% Media, 10% Clara, 10% Oscura";
  } else if (
    (p1 === "media" && p2 === "oscura") ||
    (p1 === "oscura" && p2 === "media")
  ) {
    return "30% Media, 70% Oscura";
  } else if (p1 === "oscura" && p2 === "oscura") {
    return "85% Oscura, 15% Media";
  } else {
    return `Datos desconocidos (${p1} y ${p2})`;
  }
}

  //calcular estatura
  function calcularEstatura(padre, madre, sexo) {
  const padreNum = Number(padre);
  const madreNum = Number(madre);

  if (sexo === "masculino") {
    return ((padreNum + madreNum + 13) / 2).toFixed(1) ;
  } else if (sexo === "femenino") {
    return ((padreNum + madreNum - 13) / 2).toFixed(1) ;
  } else {
    return "Sexo no especificado";
  }
}


  // Función para combinar valores simples (promedio entre padres)
  function combinarSimple(valor1, valor2) {
    if (valor1 === valor2) return valor1;

    // En caso sean distintos, mostramos ambos como posibles
    return `Posiblemente ${valor1} o ${valor2}`;
  }
});
