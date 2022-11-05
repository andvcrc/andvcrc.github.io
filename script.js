const nav = document.querySelector('.top-bar')
const btnMenu = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

function handleButtonClick(event) {
    if(event.type === 'touchstart') event.preventDefault()
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', handleButtonClick)
btnMenu.addEventListener('touchstart', handleButtonClick)