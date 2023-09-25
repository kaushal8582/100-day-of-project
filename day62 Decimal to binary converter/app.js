const btnConverter = document.querySelector('.box1 button')

btnConverter.addEventListener('click', converte);


function converte() {
    let inputValue = document.querySelector('.box1 input').value
    let tempValue = inputValue;
    let binary = 0;
    let place = 1;
    let rem = 0;

    while (tempValue > 0) {
        rem = tempValue % 2;
        binary = binary + rem * place;
        tempValue = parseInt(tempValue / 2);
        place = place*10;
    }

    let h1 = document.createElement("h1");
    h1.innerHTML = binary;
    document.querySelector('.box2').appendChild(h1)


}

