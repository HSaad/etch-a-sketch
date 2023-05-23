console.log("Hello World")
let container = document.querySelector('.container');

function createRow(num){
  let row = document.createElement('div');
  row.classList.add("flex-row");

  for(let i = 0; i < num; i++){
    let grid = document.createElement('div');
    grid.classList.add("flex-square");
    row.appendChild(grid);
  }

  container.appendChild(row);
}

function createBoard(num){
  for(let i = 0; i < num; i++){
    createRow(num);
  }
//     restartButton = document.createElement('button');
//     let parentContainer = document.querySelector('body');

//     restartButton.id = "restart";
//     restartButton.textContent = "Play Again?";
//     restartButton.addEventListener('click', () => refreshPage());

//     parentContainer.appendChild(restartButton);
}

createBoard(16);