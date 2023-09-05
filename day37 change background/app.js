const purple = document.querySelector('.purple')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const teal = document.querySelector('.teal')
const blue = document.querySelector('.blue')
const main = document.querySelector('main')


purple.addEventListener('click',()=>{
    main.style.backgroundColor = "purple"
})
red.addEventListener('click',()=>{
    main.style.backgroundColor = "red"
})
green.addEventListener('click',()=>{
    main.style.backgroundColor = "green"
})
teal.addEventListener('click',()=>{
    main.style.backgroundColor = "teal"
})
blue.addEventListener('click',()=>{
    main.style.backgroundColor = "blue"
})


