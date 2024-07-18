const introduction = document.querySelector('.introduction')
const ibtn = document.querySelector('.introduction-btn')

ibtn.addEventListener('click', () =>{
    introduction.classList.toggle('active')
    ibtn.classList.toggle('active')
})