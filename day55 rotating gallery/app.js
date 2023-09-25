const imageContainer = document.querySelector('.image-container')
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')

let x=0;

btnNext.addEventListener('click', ()=>{
    x=x-45;
    rotate();
})

btnPrev.addEventListener('click', ()=>{
    x=x+45;
    rotate();
})

const rotate = ()=>{
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

