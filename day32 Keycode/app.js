const key = document.querySelector('#key')
const keycode1 = document.querySelector('#code')
const code = document.querySelector('#value')


window.addEventListener('keyup',(event)=>{
    // console.log(event.code);
    // console.log(event.key);
    // console.log(event.keyCode);

    key.innerHTML = event.key;
    keycode1.innerHTML = event.keyCode
    code.innerHTML = event.code
})