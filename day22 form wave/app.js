const singUpBtn = document.querySelector('#singup-btn')
const close = document.querySelector('#close')

const formBox=document.querySelector('.form-box')


singUpBtn.addEventListener('click',()=>{
    formBox.classList.remove("form");
});
close.addEventListener('click',()=>[
    formBox.classList.add("form")
])

