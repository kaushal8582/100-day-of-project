const chec = document.querySelector('#check')
chec.addEventListener('click',()=>{
  if(chec.checked ===true){
    document.querySelector('.boll').style.backgroundColor = "black"
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('.boll').style.transform =  " translateX(00%)"
  }

  if(chec.checked ===false){
    document.querySelector('.boll').style.backgroundColor = "white"
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('.boll').style.transform =  " translateX(200%)"
  }

})