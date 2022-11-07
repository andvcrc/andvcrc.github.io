/* -------------------- MENU MOBILE --------------------*/
const nav = document.querySelector('.top-bar')
const btnMenu = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

function handleButtonClick(event) {
    if(event.type === 'touchstart') event.preventDefault()
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', handleButtonClick)
btnMenu.addEventListener('touchstart', handleButtonClick)
/* ---------------------------------------------------- */



/* ---------- BOTÃO DO CARROSSEL ---------- */
const btnSlide1 = document.querySelector('#slide1')
const btnSlide2 = document.querySelector('#slide2')
const btnSlide3 = document.querySelector('#slide3')
const slide1 = document.querySelector('#first-project')
const slide2 = document.querySelector('#second-project')
const slide3 = document.querySelector('#third-project')

function trocaSlide1() {
    btnSlide1.classList.add('active')
    btnSlide2.classList.remove('active')
    btnSlide3.classList.remove('active')
    slide1.classList.add('selecionado')
    slide2.classList.remove('selecionado')
    slide3.classList.remove('selecionado')
}

function trocaSlide2() {
    btnSlide1.classList.remove('active')
    btnSlide2.classList.add('active')
    btnSlide3.classList.remove('active')
    slide1.classList.remove('selecionado')
    slide2.classList.add('selecionado')
    slide3.classList.remove('selecionado')
}

function trocaSlide3() {
    btnSlide1.classList.remove('active')
    btnSlide2.classList.remove('active')
    btnSlide3.classList.add('active')
    slide1.classList.remove('selecionado')
    slide2.classList.remove('selecionado')
    slide3.classList.add('selecionado')
}

btnSlide1.addEventListener('click', trocaSlide1)
btnSlide2.addEventListener('click', trocaSlide2)
btnSlide3.addEventListener('click', trocaSlide3)
/* ---------------------------------------- */