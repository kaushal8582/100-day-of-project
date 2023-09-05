const inputBox = document.querySelector('#text')
const form = document.querySelector('#form')
const cross = document.querySelector('.cross')

inputBox.addEventListener('keydown', dis)

function dis() {

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    cross.style.display = "block"
    // console.log(inputBox.value);

    if (inputBox.value.match(pattern)) {
        console.log("Beauty");
        form.classList.add('valid')
        form.classList.remove('invalid')
    } else {
        console.log(inputBox.value);
        form.classList.add('invalid')
        form.classList.remove('valid')
    }
}