const form = document.querySelector('form')
const input = document.querySelector('form input')
const output = document.querySelector('.output')
const result = document.querySelector('.result')


function getTodo(value){
    let todo = document.createElement("div")
    let texEl = document.createElement("span")
    texEl.innerHTML = value;
    todo.appendChild(texEl);
    result.classList.toggle("success");
    result.textContent = "Item Added";

    setTimeout(() => {
        result.classList.toggle("success")
    }, 2000);

    let closeEl = document.createElement("span");
    closeEl.innerHTML = "&times;"
    closeEl.classList.add("delete")

closeEl.addEventListener("click",()=>{
    output.removeChild(todo);
    result.classList.toggle("error");
    result.textContent = "Item Deleted"
    setTimeout(() => {
        result.classList.toggle("error")
    }, 2000);
})

    todo.appendChild(closeEl);
    todo.classList.add("todo");
    return todo;

}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let value = input.value;
    if(!value.trim()) return;
    output.appendChild(getTodo(value));
    input.value  = "";
})

