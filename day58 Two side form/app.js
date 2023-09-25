const btnLogin = document.querySelector('.left button')
const btnSingUp = document.querySelector('.right button')
const box = document.querySelector('.box')
const rightBox = document.querySelector('.right-box')
const leftBox = document.querySelector('.left-box')


btnSingUp.addEventListener('click',()=>{
    box.style.left = "50%";
   rightBox.classList.remove("active")
   leftBox.classList.add("active")
})
btnLogin.addEventListener('click',()=>{
    box.style.left = "0";
    rightBox.classList.add("active")
   leftBox.classList.remove("active")
})