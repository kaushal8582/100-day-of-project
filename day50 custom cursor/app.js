const inner = document.querySelector('.inner-cursor')
const outer = document.querySelector('.outer-cursor')

window.addEventListener('mousemove', movecursor)

function movecursor(e){
    let x=e.clientX
    let y=e.clientY


    inner.style.left = `${x}px`
    inner.style.top = `${y}px`

    
    outer.style.left = `${x}px`
    outer.style.top = `${y}px`


}