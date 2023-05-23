let container = document.querySelector('.container');

// Pen movement - click and draw
let mouseDown = false;
container.addEventListener("mouseup", () => mouseDown = false);
container.addEventListener("mousedown", () => mouseDown = true);

//Pencil Functionality - Opacity settings
let opacity = 0.1;

//Tool buttons
let tool = "draw";
let drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", (e) => selectTool(e));

let eraseButton = document.querySelector("#erase");
eraseButton.addEventListener("click", (e) => selectTool(e));

let colorPicker = document.querySelector("#colorPicker");

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearBoard);

let pencilButton = document.querySelector("#pencil");
pencilButton.addEventListener("click", (e) => selectTool(e));

function clearBoard(){
  console.log("Clearing");
  let squares = document.querySelectorAll(".flex-square");
  
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function selectTool(toolElement){
  //clear previous selection
  let selectedTools = document.querySelectorAll(".selected");
  selectedTools.forEach((element) => {
    element.classList.remove("selected");
  });

  toolElement.target.classList.add("selected");
  tool = toolElement.target.id;
}

function draw(grid){
  let square = grid.target;
  if( grid.type === 'mouseover' && !mouseDown) return;
  if(tool == "draw"){
    square.style.backgroundColor = colorPicker.value;
  } else if (tool == "erase"){
    square.style.backgroundColor = "white";
  } else if (tool == "pencil"){
      square.style.backgroundColor = colorPicker.value;
      if(square.style.opacity == ""){
        square.style.opacity = 0.1;
      }else {
        square.style.opacity = Number(square.style.opacity) + 0.1;
      }
  }
}

function createRow(num){
  let row = document.createElement('div');
  row.classList.add("flex-row");

  for(let i = 0; i < num; i++){
    let grid = document.createElement('div');
    grid.classList.add("flex-square");
    grid.addEventListener('mouseover', (e) => draw(e));
    grid.addEventListener('mousedown', (e) => draw(e));
    row.appendChild(grid);
  }

  container.appendChild(row);
}

function createBoard(num){
  for(let i = 0; i < num; i++){
    createRow(num);
  }
}

createBoard(16);