const container = document.querySelector('.content')
const baseUrl = "https://source.unsplash.com/random/"
let rows = 7;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${baseUrl}${randomimg()}`
    container.appendChild(img);
}


function randomimg() {
    return (`${random()} x ${random()}`);
}

function random() {
    return (Math.floor(Math.random() * 10) + 300);
}



