const typeText = document.querySelector('.typed-text')
const cursor = document.querySelector('.cursor');

const words = ["Awesome","Easy","Object Oriented", "Nice", "Cool" ,"🤑😲🙀🦍"];

const typingdelay = 200;
const erasegdelay = 200;
const newLetterdelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log("kaush");
    if (words.length) {
        console.log("Beauty");
        setTimeout(type, newLetterdelay);
    }
})


function type() {
    if (charIndex < words[index].length) {
        typeText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingdelay);
    }
    else {
        setTimeout(erase, newLetterdelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typeText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasegdelay);
    } else {
        index++
        if (index >= words.length) {
            index = 0
        }
        setTimeout(type,typingdelay +1100);
    }
}
