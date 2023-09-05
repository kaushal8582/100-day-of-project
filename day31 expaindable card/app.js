const allImage = document.querySelectorAll('.img')

allImage.forEach((img)=>{
    img.addEventListener('click',()=>{
        removeActiveClass()
        img.classList.add('active')
    })
})

function removeActiveClass(){
    allImage.forEach((img)=>{
        img.classList.remove("active")
    })
}
