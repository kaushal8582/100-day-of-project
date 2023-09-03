const textBox = document.querySelector('.text-container h2')
const incrementBtn = document.querySelector('.increment')
const save = document.querySelector('.save')
const show = document.querySelector('.show-entries')

let value = 0;

incrementBtn.addEventListener('click',()=>{
    console.log("kau");
    value=value+1;
    textBox.innerHTML=value;
})

save.addEventListener('click',()=>{
    let k = value + " ,";
    show.innerHTML += k;
    value=0;
    textBox.textContent = 0;
})