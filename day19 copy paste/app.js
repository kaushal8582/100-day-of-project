const inputBox = document.querySelector('#inp')
const btn = document.querySelector('button')
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
    inputBox.select();
    document.execCommand('copy');
    box.classList.toggle("upp")
    setTimeout(() => {
        box.classList.toggle("upp")
    }, 2000);

})