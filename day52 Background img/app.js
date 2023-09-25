const image = document.querySelectorAll('.img')
const btn = document.querySelectorAll('.btn')

let activeIndex = 0;

function activeImages(){
    image.forEach((index)=>{
        index.classList.remove("active");
        index.classList.remove("animation")
    
    })
    image[activeIndex].classList.add("active")
    index[activeIndex].classList.add("animation")
}



btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList == "right"){
            activeIndex++;
            if(activeIndex > image.length-1){
                activeIndex=0;
            }

        }else{
            activeIndex--;
            if(activeIndex <0){
                activeIndex=image.length-1;
            }
        }

        activeImages();
    })
})