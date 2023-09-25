const btnGenerate = document.querySelector('.btn1')
const btnCopy = document.querySelector('.btn2')
const input = document.querySelector('#password')




const generate = ()=>{
    let letters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const password =7;
    let random =" "
    for(let i=0; i<=7; i++){
        random+= letters[Math.floor(Math.random() * letters.length)]
    }

    input.value = random;
}

const copy = ()=>{
    input.select();
    document.execCommand('copy')
}


btnCopy.addEventListener('click', copy);
btnGenerate.addEventListener('click', generate);


