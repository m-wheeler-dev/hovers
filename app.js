const container = document.getElementById('container');
const colors = ['lime', 'blue', 'magenta', 'yellow', 'red'];
const squares = 500;

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => makeColor(square))
    square.addEventListener('mouseout', () => takeColor(square))

    container.appendChild(square)    
}

function makeColor(element) {
    const color = randomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function takeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = 'none'
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}