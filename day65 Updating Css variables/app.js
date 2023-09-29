const borderRadiusBox = document.querySelector('.radius')
const blurBox = document.querySelector('.blur')
const border = document.querySelector('.border')
const color = document.querySelector('.color')
const box2 = document.querySelector('.box2')

color.addEventListener('input',()=>{
    box2.style.borderColor = `${color.value}`
})

border.addEventListener('input',(e)=>{
   box2.style.border = `${border.value}px solid ${color.value}`
})

blurBox.addEventListener('input',()=>{
    box2.style.filter = `blur(${blurBox.value}px)`
})

borderRadiusBox.addEventListener('input',()=>{
    box2.style.borderRadius = `${borderRadiusBox.value}%`;
})

