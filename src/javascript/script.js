/* -------------------- MENU MOBILE --------------------*/
const nav = document.querySelector('.top-bar')
const btnMenu = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

function handleButtonClick(event) {
    if (event.type === 'touchstart') event.preventDefault()
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', handleButtonClick)
btnMenu.addEventListener('touchstart', handleButtonClick)

/* ---------------------------------------------------- */

/* -------------------- CARROSSEL --------------------- */

const btnSlide1 = document.querySelector('#slide1')
const btnSlide2 = document.querySelector('#slide2')
const btnSlide3 = document.querySelector('#slide3')
const slide1 = document.querySelector('#first-project')
const slide2 = document.querySelector('#second-project')
const slide3 = document.querySelector('#third-project')

function trocarSlide(id) {
    if ((id.id == 'slide1')) {
        slide1.classList.add('selecionado')
        slide1.classList.remove('inactive')
        slide2.classList.add('inactive')
        slide3.classList.add('inactive')
        slide2.classList.remove('selecionado')
        slide3.classList.remove('selecionado')
    } else if ((id.id == 'slide2')) {
        slide1.classList.remove('selecionado')
        slide2.classList.add('selecionado')
        slide2.classList.remove('inactive')
        slide1.classList.add('inactive')
        slide3.classList.add('inactive')
        slide3.classList.remove('selecionado')
    } else if (id.id == 'slide3') {
        slide1.classList.remove('selecionado')
        slide2.classList.remove('selecionado')
        slide3.classList.add('selecionado')
        slide3.classList.remove('inactive')
        slide1.classList.add('inactive')
        slide2.classList.add('inactive')
    }
}

const button = document.querySelectorAll('.selection')

document.querySelectorAll('.selection').forEach(function (button) {

    button.addEventListener('click', function (event) {
        const elemento = event.target || event.srcElement
        const id = elemento.id

        trocarSlide(document.getElementById(id))

        if (button.id == 'slide1') {
            btnSlide1.classList.add('active')
            btnSlide2.classList.remove('active')
            btnSlide3.classList.remove('active')
        } else if (button.id == 'slide2') {
            btnSlide1.classList.remove('active')
            btnSlide2.classList.add('active')
            btnSlide3.classList.remove('active')
        } else if (button.id == 'slide3') {
            btnSlide1.classList.remove('active')
            btnSlide2.classList.remove('active')
            btnSlide3.classList.add('active')
        }
    })

})

/* ---------------------------------------------------- */