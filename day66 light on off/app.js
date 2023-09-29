const btn = document.querySelector('.btn')
const body = document.body
const audio = document.querySelector('#audio')


btn.addEventListener('click',()=>{
    body.classList.toggle("on");
    audio.play();
})

