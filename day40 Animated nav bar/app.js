const nav = document.querySelector('.page1 nav')

    window.addEventListener('scroll',change);
    function change(){
        console.log(scrollY);

        if(scrollY > 250){
            nav.classList.add("active")
        }else{
            nav.classList.remove("active")
        }
    }

