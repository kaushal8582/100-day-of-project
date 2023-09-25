const box = document.querySelector('.box')
const inputRange = document.querySelectorAll('input[type = "range"]')
const showCode = document.querySelector('.code')
const btnCopy = document.querySelector('.copy')
const inputColor = document.querySelector('.colors input')


function createBox(){
    let X = inputRange[0].value;
    let Y = inputRange[1].value;
    let blurRadius = inputRange[2].value;
    let spreadRadius = inputRange[3].value;
    
    
    let shadowColor = inputColor.value;
    let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px  `
    box.style.cssText = `box-shadow: ${boxShadow} ${shadowColor}`

    showCode.value = `box-shadow: ${boxShadow}`

}

inputRange.forEach((input)=>{
    input.addEventListener('input',createBox);
})

inputColor.addEventListener('input',createBox);
btnCopy.addEventListener('click',()=>{
    showCode.select();
    document.execCommand('copy');
    alert("Code copied 🆗")
})


