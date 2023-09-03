let redhart = document.querySelector('.red-heart');
let greayheart = document.querySelector('.greay-heart');
let k = document.querySelector('.greay-heart::after');
console.log(k);


greayheart.addEventListener('click' , ()=>{
    redhart.classList.add('animation');
    // greayheart.classList.add('color')
    
})

redhart.addEventListener('click' , ()=>{
    redhart.classList.remove('animation');
    // greayheart.classList.remove('color')
   
})