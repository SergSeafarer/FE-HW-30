const blockRef = document.querySelector('.block');
const parentRef = document.querySelector('.block-parent');

const setRandomColor = () => {
  const colorDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';

  for(let i = 0; i < 6; i++) {
    color += colorDigits[Math.floor(Math.random() * colorDigits.length)];
  }
  blockRef.style.background = color;
}

const changePosition = () => {
  const randomX = Math.floor(Math.random() * (parentRef.clientWidth - blockRef.clientWidth));
  const randomY = Math.floor(Math.random() * (parentRef.clientHeight - blockRef.clientHeight));
  blockRef.style.left = randomX + 'px';
  blockRef.style.top = randomY + 'px';
}
setInterval(setRandomColor, 500);
setInterval(changePosition, 1000);