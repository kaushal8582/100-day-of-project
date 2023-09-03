const circle = document.querySelector('.circle')

// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);

//     if (window.scrollY <= 5) {
//         circle.classList.toggle("fadein");
//         circle.classList.toggle("fadeout");
//     }
// })

window.addEventListener('scroll',()=>{
    if(window.scrollY<=40){
        circle.classList.remove('fadein')
        
    }else{
        circle.classList.add('fadein')
    }
})