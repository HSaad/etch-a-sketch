const container = document.querySelector('#container');

createGrid();

const gridSquares = document.querySelectorAll('.content');

gridSquares.forEach((square) => {

	square.addEventListener('mouseenter', (e) =>{
		//square.classList.add('black');
		square.style.backgroundColor = 'black';
	})
});

function createGrid(){
	for(let i = 0; i < 16; i++){
		createRow();
	}
}

function createRow(){
	//const content = null;
	let width = 600 / 16;
	//let height = 
	for(let i = 0; i < 16; i++){
		const content = document.createElement('div');
		content.classList.add('content');
		content.style.cssText = `width: ${width}px; height: ${width}px`;
		container.appendChild(content);
	}
}
