const allBox = document.querySelectorAll(".box")
const sendBtn = document.querySelector('.send')
const main = document.querySelector('main')
const contener = document.querySelector('.contener')


let selectRating = "Satisfied"

contener.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains("box")){
        remove();

        e.target.parentNode.classList.add("active");
        selectRating = e.target.nextElementSibling.innerHTML;

    }
})

sendBtn.addEventListener('click',()=>{
    main.innerHTML = `<p class  = "heart"> 💖 </p>
    <span> Thank You!</span>
    <br>
    <span>FeadBack: ${selectRating} </span>
    
    
    `
})

function remove(){
    for(let i=0; i<allBox.length; i++){
        allBox[i].classList.remove("active");
    }
}


