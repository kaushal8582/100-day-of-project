const container = document.querySelector('header')
const pages = document.querySelectorAll('.section')
const toggleBtn = document.querySelector('.icon')
const ul = document.querySelector('.nav-list')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.link')

let pageIndex =0;

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle("active")
    container.classList.toggle("active")
    ul.classList.toggle("show")
})


links.forEach((item, i)=>{
    item.addEventListener('click',()=>{
        nextPage(i);
    })
})

function nextPage(index){
    overlay.style.animation = `slide 1s liner 1`;

    setTimeout(()=>{
        pages[pageIndex].classList.remove("active");
        pages[index].classList.add("active");
        pageIndex=index;
    },500);

    setTimeout(() => {
        overlay.style.animation=null;
    }, 1000);


}