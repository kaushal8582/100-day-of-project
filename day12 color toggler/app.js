const button = document.querySelector('#button')
const h2 = document.querySelector('#h2')

random();

function random() {
    let letters = "0123456789abcdef"
    let color = "#"

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }

    document.body.style.backgroundColor = color;
   h2.innerHTML = color;
}


button.addEventListener('click', ()=>  {
   random();
})
