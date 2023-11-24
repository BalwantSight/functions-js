const divA = document.getElementById("a");
const divB = document.getElementById("b");
const divC = document.getElementById("c");
const divD = document.getElementById("d");

const keyDiv = document.getElementById("key");
const h1 = document.getElementById("mensaje1");

// Establecer los estilos iniciales
divA.style.backgroundColor = "yellow";
divB.style.backgroundColor = "blue";
divC.style.backgroundColor = "red";
divD.style.backgroundColor = "green";

const changeBackgroundColor = (element, color) => {
  element.style.backgroundColor = color;
};

const createNewDiv = (color) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("cuadrado");
  newDiv.style.backgroundColor = color;
  keyDiv.parentNode.insertBefore(newDiv, keyDiv.nextSibling);
};

const changeColor = (event) => {
  const keyPressed = event.key.toUpperCase();

  if (keyPressed === "A") {
    changeBackgroundColor(keyDiv, "pink");
    document.getElementById("mensaje").textContent =
      "Elegiste letra A que es color Rosado";
  } else if (keyPressed === "S") {
    changeBackgroundColor(keyDiv, "orange");
    document.getElementById("mensaje").textContent =
      "Elegiste letra S que es color Naranjo";
  } else if (keyPressed === "D") {
    changeBackgroundColor(keyDiv, "skyblue");
    document.getElementById("mensaje").textContent =
      "Elegiste letra D que es color Celeste";
  } else if (keyPressed === "Q") {
    createNewDiv("purple");
    document.getElementById("mensaje").textContent =
      "Elegiste letra Q que crea un cuadrado Morado";
  } else if (keyPressed === "W") {
    createNewDiv("grey");
    document.getElementById("mensaje").textContent =
      "Elegiste letra W que crea un cuadrado Azul";
  } else if (keyPressed === "E") {
    createNewDiv("brown");
    document.getElementById("mensaje").textContent =
      "Elegiste letra E que crea un cuadrado Café";
  } else {
    h1.innerHTML = "Elegiste la tecla equivocada.";
  }
};

divA.addEventListener("click", () => changeBackgroundColor(divA, "black"));
divB.addEventListener("click", () => changeBackgroundColor(divB, "black"));
divC.addEventListener("click", () => changeBackgroundColor(divC, "black"));
divD.addEventListener("click", () => changeBackgroundColor(divD, "black"));

document.addEventListener("keydown", changeColor);
