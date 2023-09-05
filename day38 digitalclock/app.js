const clock  =  document.querySelector('.clock')
clock.addEventListener('load', time)

function time(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

  const html = `
    <spna>${h} : </span>
    <spna>${m} : </span>
    <spna>${s}</span>
  `

  clock.innerHTML = html
}

setInterval(time,1000);