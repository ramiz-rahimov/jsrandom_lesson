const container = document.querySelector('.container')
const button = document.querySelector('.btn')
const colors  = ['red','green','black','perple']

button.addEventListener('click' ,randomColor)
function randomColor(){
    const differentColor = colors[Math.floor(Math.random() * colors.length)]
    const topPx = Math.floor(Math.random() * 800)
    const leftPx = Math.floor(Math.random() * 1200)

    const myDiv = document.createElement('div')
    myDiv.style.backgroundColor = differentColor
    myDiv.style.width = '10px'
    myDiv.style.height = '10px'
    myDiv.style.position = 'absolute'
    myDiv.style.top = `${topPx}px`
    myDiv.style.left = `${leftPx}px`


    container.appendChild(myDiv)
}