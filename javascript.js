function setBoxes() {
  const container = document.querySelector('.grid');
  for (let i = 0; i < 16; i++)
  {
    for (let j = 0; j < 16; j++)
    {
      const box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);
    }
  }

}

setBoxes();