const closeX = document.querySelector('.click h2');
const img  = document.querySelectorAll('main img');
const fullScreenImg = document.querySelector('.click img');
const fullScreen = document.querySelector('.click');


img.forEach((img,index)=>{
    index=index+1;
    img.addEventListener('click',()=>{
        fullScreenimg(`img/${index}.jpg`);
    })
})
closeX.addEventListener('click',()=>{
    fullScreen.style.display = "none";
})

function fullScreenimg(index){
    fullScreen.style.display = "flex";
    fullScreenImg.src = index
}
