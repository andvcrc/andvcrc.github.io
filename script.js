const logo = document.querySelector('.logo')

logo.addEventListener('click', function() {
    document.querySelector('.side-bar').classList.toggle('show')
    document.querySelector('.fa-sharp').classList.toggle('fa-xmark')
})