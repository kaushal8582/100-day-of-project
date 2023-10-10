const imgUser = document.querySelector('.user img')
const nameB = document.querySelector('.name')
const statusTe = document.querySelector('.status')
const about = document.querySelector('.test')

let current = 1;

const testimonials = [
    {
        name: "Debbie O'Brien ",
        status: "Senior Program Manager",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        p: "Thanks Steve will give it a read. Although I am a mega  @tailwindcssfan.Have been working with CSS for over ten years and Tailwind just makes my life easier.It is still CSS and you use flex grid etc but just quicker to write and maintain.You should give it a try"
    },
    {
        name: "Ben Furfie",
        status: "@frontendben",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        p: "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. Its not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realise semantic CSS was a 20 year mistake. "
    },
      {
        name: "sTrd f",
        status: "@backend",
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        p: "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. Its not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realise semantic CSS was a 20 year mistake. "
    },
]


function addtestimonial() {
    const { name, status, img, p } = testimonials[current]
    imgUser.src = img
    nameB.innerHTML = name
        statusTe.innerHTML = status
        about.innerHTML = p

        current++;

    if (current === testimonials.length) {
        current = 0;
    }


}

setInterval(() => {
    addtestimonial();
}, 3000);