const section = document.querySelector('section')
const h2Box = document.querySelector('section h2')
const rotate = document.querySelector('section i')
const socialBox = document.querySelector('.social-box')


section.addEventListener('click',()=>{
    rotate.classList.toggle("rotate");
    socialBox.classList.toggle("so-box")
})


document.querySelector('#fac').addEventListener('click',()=>{
     rotate.classList.toggle("rotate");
    socialBox.classList.toggle("so-box")
    h2Box.innerText = document.querySelector('#fac h2').innerHTML
})
document.querySelector('#ins').addEventListener('click',()=>{
     rotate.classList.toggle("rotate");
    socialBox.classList.toggle("so-box")
    h2Box.innerText = document.querySelector('#ins h2').innerHTML
})

document.querySelector('#twi').addEventListener('click',()=>{
         rotate.classList.toggle("rotate");
    socialBox.classList.toggle("so-box")
    h2Box.innerText = document.querySelector('#twi h2').innerHTML
})

document.querySelector('#you').addEventListener('click',()=>{
         rotate.classList.toggle("rotate");
    socialBox.classList.toggle("so-box")
    h2Box.innerText = document.querySelector('#you h2').innerHTML
})

document.querySelector('#pin').addEventListener('click',()=>{
     rotate.classList.toggle("rotate");
    socialBox.classList.toggle("so-box")
    h2Box.innerText = document.querySelector('#pin h2').innerHTML
})

