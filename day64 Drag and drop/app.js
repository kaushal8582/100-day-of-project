const fill = document.querySelector('.fill')
const emptyes = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(const empty of emptyes){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragStart(){
    setTimeout(() => {
        this.className = "invisible";
    }, 0);
}

function dragEnd(){
    this.className = "fill"
}
function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className+=" hovered"
}

function dragLeave(){
    this.className = "empty"
}

function dragDrop(){
    this.className = "empty"
    this.append(fill);
}