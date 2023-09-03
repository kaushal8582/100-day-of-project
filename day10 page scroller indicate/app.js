const scrollbar = document.querySelector('.scroll')

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(scrollHeight);
window.addEventListener("scroll", scroll);
function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollled = (scrollTop / scrollHeight) * 100;
    scrollbar.style.width = `${scrollled}%`
}

