const textBox = document.querySelector('#text');
const outputBox = document.querySelector('.output');
const btn = document.querySelectorAll('.btn')

textBox.addEventListener('keyup', () => {
    outputBox.innerHTML = textBox.value
})

btn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("capital")) {
            outputBox.innerHTML = outputBox.innerHTML.toUpperCase();
        }else if(button.classList.contains("smaller")){
            outputBox.innerHTML = outputBox.innerHTML.toLowerCase();
        }else if(button.classList.contains("bold")){
            outputBox.style.fontWeight = "900";
        }
        else if(button.classList.contains("italic")){
            outputBox.style.fontStyle = "italic"
        }else if(button.classList.contains("underline")){
            outputBox.style.textDecoration = "underline"
        }
        else if(button.classList.contains("captialize")){
            outputBox.innerHTML = outputBox.innerHTML.charAt(0).toUpperCase()
            + outputBox.innerHTML.slice(1).toLowerCase();
        }
    })

})