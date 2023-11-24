function pintar(color = "green") {
  ele1.style.backgroundColor = color;
}

const ele1 = document.getElementById("ele1");
pintar();
ele1.addEventListener("click", () => pintar("yellow"));
