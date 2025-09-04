const containerCanvas = document.querySelector("div.container-canvas");

const colorChangeHandler = (e) => {
  e.srcElement.style.backgroundColor = "rgba(0,0,0,1)";
};

const createDivs = (number = 16) => {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      let aDiv = document.createElement("div");
      aDiv.classList.add("solid-border", "canvas-div");
      containerCanvas.appendChild(aDiv);
      aDiv.style.flex = `0 0 calc(100% / ${number})`;

      aDiv.addEventListener("mouseover", (e) => colorChangeHandler(e));
    }
  }
};

const gridCreationHandler = () => {
  const userChoice = parseInt(prompt("choose the desired number for grid."));
  if (userChoice > 100 || userChoice < 0) {
    alert("Please choose the value between 0 and 100");
    return;
  }

  createDivs(userChoice);
};

const clearButton = document.querySelector("button.clear-button");

const clearCanvasHandler = () => {
  for (let i of containerCanvas.children) {
    i.style.backgroundColor = "";
  }
};

clearButton.addEventListener("click", clearCanvasHandler);

const gridButton = document.querySelector("button.grid-button");
gridButton.addEventListener("click", gridCreationHandler);

createDivs();
