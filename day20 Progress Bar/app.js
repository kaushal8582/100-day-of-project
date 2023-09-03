const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const progressBar = document.querySelector('.progress')
const circles = document.querySelectorAll('.circle')

let activeIndex = 1;

next.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex > circles.length) {
        activeIndex = circles.length
    }
    updateUI();
})

prev.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 1) {
        activeIndex = 1;
    }
    updateUI();
})

function updateUI() {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });


    const active = document.querySelectorAll('.active');
    progressBar.style.width = ((active.length - 1) / (circles.length - 1)) * 100 + "%"

    if (activeIndex === 1) {
        prev.disabled = true;
    } else if (activeIndex === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
