const containerCanvas = document.querySelector("div.container-canvas");

const colorChangeHandler = (e) => {
  e.srcElement.style.backgroundColor = "rgba(0,0,0,1)";
};

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let aDiv = document.createElement("div");
    aDiv.classList.add("solid-border", "canvas-div");
    containerCanvas.appendChild(aDiv);
    aDiv.style.flex = `0 0 calc(100% / 16)`;

    aDiv.addEventListener("mouseover", (e) => colorChangeHandler(e));
  }
}

const clearButton = document.querySelector("button.clear-button");

const clearCanvasHandler = () => {
  for (let i of containerCanvas.children) {
    i.style.backgroundColor = "";
  }
};

clearButton.addEventListener("click", clearCanvasHandler);
