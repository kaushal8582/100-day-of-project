const loder = document.querySelector('.loder h2')
const section = document.querySelector('section')
console.log(loder);
let k=1;
lode();

let n= setInterval(() => {
    lode();
}, 30);
function lode(){
    loder.innerText= `${k}%`;
    k++;
    if(k>99){
        loder.style.display = "none";
        clearInterval(n);
        section.style.transform = "translateY(-500px)";
    }else{
        section.style.transform = "translateY(00px)";
        loder.style.display = "block";
    }
}

