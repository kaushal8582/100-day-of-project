const allLi = document.querySelectorAll('li');

allLi.forEach((li) => {
    li.addEventListener('click', (e) => {
        document.querySelectorAll('.nav ul li.active').forEach((e) => {
            e.classList.remove('active');
        })
        e.target.classList.add('active');


        document.querySelectorAll('section').forEach((section) => {
            if (e.target.textContent === section.dataset.section) {
                document.querySelectorAll('.section.visible').forEach((elm) => {
                    elm.classList.remove('visible');
                })
                section.classList.add('visible');
            }
        })


    })

})