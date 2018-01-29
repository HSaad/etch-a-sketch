const container = document.querySelector('#container');

createGrid(16);

draw();

const clearButton = document.querySelector('#clear');
const randomButton = document.querySelector('#random');
const rainbowButton = document.querySelector('#rainbow');
const pencilButton = document.querySelector('#pencil');
const eraserButton = document.querySelector('#eraser');
const generateButton = document.querySelector('#newGrid');

generateButton.addEventListener('click', (e)=>{
	deleteGrid();
	let num = +document.querySelector('input').value;
	createGrid(num);
	draw();
});

clearButton.addEventListener('click', (e) => {
	let gridSquares = document.querySelectorAll('.content');
	gridSquares.forEach((square) =>{
		square.style.backgroundColor = 'white';
	})
	draw(); 
});

eraserButton.addEventListener('click', (e) =>{
	draw("white");
});

randomButton.addEventListener('click', (e)=>{
	//random color
	let randomColor = getRandomColor();
	draw(randomColor);
});

rainbowButton.addEventListener('click', (e) =>{
	let gridSquares = document.querySelectorAll('.content');
	gridSquares.forEach((square) =>{
		square.addEventListener('mouseenter', (e)=>{
			square.style.backgroundColor = getRandomColor();
		})
	})
});

pencilButton.addEventListener('click', (e)=>{
	let gridSquares = document.querySelectorAll('.content');
	gridSquares.forEach((square) =>{
		let opacity = 0;
		square.addEventListener('mouseenter', (e)=>{
			if(opacity != 0){
				opacity ++;
				square.style.backgroundColor = `rgba(0, 0, 0, ${opacity/10})`;
			}
			else{ //first time mouse passes over
				square.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
				opacity++;
			}
		})
	})
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function draw(colorName){
	let gridSquares = document.querySelectorAll('.content');
	gridSquares.forEach((square) => {

		square.addEventListener('mouseenter', (e) =>{
			//square.classList.add('black');
			if(colorName == undefined){
				square.style.backgroundColor = 'rgb(0, 0, 0, 1)';
			}else{
				console.log(colorName);
				square.style.backgroundColor = colorName;
			}
		})
	});
}

function createGrid(num){
	if (num == undefined) return;
	for(let i = 0; i < num; i++){
		createRow(num);
	}
}

function createRow(num){
	let width = 600 / num;
	for(let i = 0; i < num; i++){
		const content = document.createElement('div');
		content.classList.add('content');
		content.style.cssText = `width: ${width}px; height: ${width}px`;
		container.appendChild(content);
	}
}

function deleteGrid(){
	while (container.firstChild) {
    	container.removeChild(container.firstChild);
	}
}