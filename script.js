const logo = document.querySelector('.menu-icon')

logo.addEventListener('click', function() {
    document.querySelector('.side-bar').classList.toggle('show')
    document.querySelector('.fa-sharp').classList.toggle('fa-xmark')
})