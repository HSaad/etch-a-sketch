let container = document.querySelector('.board');
let mouseDown = false;
let tool = "draw";
let colorPicker = document.querySelector("#colorPicker");

function clearBoard(){
  let squares = document.querySelectorAll(".flex-square");
  
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function clearPrevSelection(){
  let selectedTools = document.querySelectorAll(".selected");
  selectedTools.forEach((element) => {
    element.classList.remove("selected");
  });
}

function selectTool(toolElement){
  clearPrevSelection();
  toolElement.target.classList.add("selected");
  tool = toolElement.target.id;
}

function draw(grid){
  let square = grid.target;
  if( grid.type === 'mouseover' && !mouseDown) return;
  if(tool == "draw"){
    square.style.opacity = "";
    square.style.backgroundColor = colorPicker.value;
  } else if (tool == "erase"){
    square.style.opacity = "";
    square.style.backgroundColor = "white";
  } else if (tool == "pencil"){
    square.style.backgroundColor = colorPicker.value;
    if(square.style.opacity == ""){
      square.style.opacity = 0.1;
    }else {
      square.style.opacity = Number(square.style.opacity) + 0.1;
    }
  }else if (tool == "rainbow"){
    square.style.opacity = "";
    square.style.backgroundColor = randomColor();
  }
}

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++){
      color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
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

function deleteBoard(){
  container.textContent = "";
}

function generateNewBoard(e){
  let gridNumberLabel = document.querySelector("label");
  gridNumberLabel.textContent = `${e.target.value} x ${e.target.value}`;
  deleteBoard();
  createBoard(e.target.value);
}

function initializeBoard(){
  container.addEventListener("mouseup", () => mouseDown = false);
  container.addEventListener("mousedown", () => mouseDown = true);

  let drawButton = document.querySelector("#draw");
  drawButton.addEventListener("click", (e) => selectTool(e));

  let eraseButton = document.querySelector("#erase");
  eraseButton.addEventListener("click", (e) => selectTool(e));

  let clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearBoard);

  let pencilButton = document.querySelector("#pencil");
  pencilButton.addEventListener("click", (e) => selectTool(e));

  let rainbowButton = document.querySelector("#rainbow");
  rainbowButton.addEventListener("click", (e) => selectTool(e));

  let gridNumberButton = document.querySelector("#gridNum");
  gridNumberButton.addEventListener("mouseup", (e) => generateNewBoard(e));

  createBoard(16);
}

initializeBoard();