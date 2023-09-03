const highlight = document.querySelector('.highlight')
const li = document.querySelectorAll('nav li')
const nav = document.querySelector('nav')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
   nav.classList.toggle("tog")
})

li.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        console.log(index.value);
        const w =this.offsetWidth,
        h =this.offsetHeight,
        t=this.offsetTop;

        highlight.style.cssText = `transform:translateY(${t}px);
        width:${w}px; height:${h}px; `;
    })
})
