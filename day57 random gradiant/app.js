
const box = document.querySelector('.box');
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const btn = document.querySelector('.btn button')

console.log(box);


function random() {
    let letters = "0123456789abcdef"
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}

const randomColor = () => {
    color1.value = random();
    color2.value = random();
    box.style.background = `linear-gradient(${color1.value},${color2.value})`
}

const setGradient = ()=>{
    
 box.style.background = `linear-gradient(${color1.value},${color2.value})`
}
randomColor();
color1.addEventListener('input',setGradient)
color2.addEventListener('input',setGradient)
btn.addEventListener('click', randomColor);









