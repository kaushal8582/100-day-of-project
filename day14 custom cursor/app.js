const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',(event)=>{
    console.log(event.pageX);
    console.log(event.pageY);
    move(event.pageX , event.pageY);
})

 function move(pageX,pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY +"px";
 }
