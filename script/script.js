const containerCanvas = document.querySelector("div.container-canvas");

const colorChangeHandler = (e) => {
  //Validate if Background color is already set for the element
  //If set, extract and increment the opacity by 0.2
  if (e.srcElement.style.backgroundColor) {
    const rgbaExtract = e.srcElement.style.backgroundColor.slice(5, -1);
    const rgbaArray = rgbaExtract.split(",");
    if (rgbaArray.length === 4) {
      e.srcElement.style.backgroundColor = `rgba(${rgbaArray[0]},${
        rgbaArray[1]
      },${rgbaArray[2]},${parseFloat(rgbaArray[3]) + 0.2})`;
    }
  } else {
    e.srcElement.style.backgroundColor = "rgba(0,0,0,0.2)";
  }
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

const clearDivs = (divsToDelete) => {
  //Use While and not For..of loop to remove all child nodes
  //Since the child nodes are updated real-time
  while (divsToDelete.firstChild) {
    divsToDelete.firstChild.remove();
  }
};

const gridCreationHandler = () => {
  const userChoice = parseInt(prompt("choose the desired number for grid."));

  if (userChoice > 100 || userChoice < 0) {
    alert("Please choose the value between 0 and 100");
    return;
  }

  clearDivs(containerCanvas);

  createDivs(userChoice ? userChoice : 16);
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
