const btn = document.querySelector('.button')
const p = document.querySelector('.p')

btn.addEventListener('click',()=>{
    let input = document.querySelector('.searchBox input').value

    if(input !== ""){
        let regExp = new RegExp(input , 'gi')
        p.innerHTML = p.textContent.replace(regExp , "<span>$&</span>")
    }

})