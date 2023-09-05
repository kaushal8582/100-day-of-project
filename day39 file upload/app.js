const imgBox = document.querySelector('.img')
const clo = document.querySelector('.img h1')
const img = document.querySelector('.img img')
const input = document.querySelector('.upload input')


input.addEventListener('change',()=>{
    uploadFile(event);
})

function uploadFile(event){
    imgBox.classList.add("active")
    img.src = URL.createObjectURL(event.target.files[0]);
    clo.addEventListener('click',()=>{
        imgBox.classList.remove('active');
    })
}