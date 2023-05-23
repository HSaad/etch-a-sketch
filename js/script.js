let container = document.querySelector('.container');

let mouseDown = false;
container.addEventListener("mouseup", () => mouseDown = false);
container.addEventListener("mousedown", () => mouseDown = true);


function draw(grid){
  let square = grid.target;
  if( grid.type === 'mouseover' && !mouseDown) return;
  square.style.backgroundColor = "black";
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