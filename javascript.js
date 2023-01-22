//create a number of divs in the grid, each of class 'box'
function setBoxes( numSquaresPerSide = 16) {
  const container = document.querySelector('.grid');
  for (let i = 0; i < numSquaresPerSide; i++)
  {
    for (let j = 0; j < numSquaresPerSide; j++)
    {
      const box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);
    }
  }

}

function clearBoxes() {
  const myNode = document.querySelector('.grid');
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
}


function readSlider(e) {
  // read the value from the slider:
  clearBoxes();
  let grid = document.querySelector('.grid');

  grid.removeAttribute('style');
  grid.setAttribute('style', 
  `grid-template-rows: repeat(${e.target.value}, minmax(10px, 1fr));
   grid-template-columns: repeat(${e.target.value}, minmax(10px, 1fr));`);

  setBoxes(e.target.value);
}

let rangeInput = document.getElementById("boxInput");

rangeInput.addEventListener('mouseup', readSlider);



setBoxes();
