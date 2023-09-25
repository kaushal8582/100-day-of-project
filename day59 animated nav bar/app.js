const container = document.querySelector('.container')
const input = document.querySelector('.input')
const magnifire = document.querySelector('.magni')
const micro = document.querySelector('.micro')


magnifire.addEventListener('click',()=>{
    input.classList.toggle("active")
    container.classList.toggle("active")
    micro.classList.toggle("hidden")
})

