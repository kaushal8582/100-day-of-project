const circle = document.querySelector('.circle')
const box = document.querySelector('.box')
const plus = document.querySelector('.plus')


plus.addEventListener('click',()=>{
    circle.classList.toggle("active")
    box.classList.toggle("active")
    plus.classList.toggle("active")
})

