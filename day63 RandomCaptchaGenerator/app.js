const captchBox = document.querySelector('.captch-content')
const reload = document.querySelector('.reload ')
const captchaInput = document.querySelector('.input')
const checkCaptcha = document.querySelector('.check')
const result = document.querySelector('.result')

randomCaptcha();

function randomCaptcha() {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456780";
    let captcha = " ";
    for (let i = 0; i < 6; i++) {
        captcha += letters[Math.floor(Math.random() * letters.length)]
    }
    captchBox.innerHTML = captcha;
    captchaInput.value = "";
    result.style.display = "none"

}
reload.addEventListener('click',randomCaptcha);

function check(e) {
    let inputValue = captchaInput.value
    if(inputValue===captchBox.innerText){
       result.innerText = "Good Work Captcha is Match";
       result.style.display = "block"
        setTimeout(() => {
            randomCaptcha()
        }, 4000);
    }else{
        result.innerText = "Captcha is not match Plz try again ?";
        result.style.color = "rgb(136, 255, 255)"
        result.style.display = "block"
    }

}

checkCaptcha.addEventListener('click', check);

