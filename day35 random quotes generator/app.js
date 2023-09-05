const btn = document.querySelector('.btn');
const auther = document.querySelector('#author p');
const quotes = document.querySelector('.content span');


const arrofQuotes = [
    {
        author:" Steve Jobs",
        quotes:"The only way to do great work is to love what you do."
    },
    {
        author:" Robert Frost",
        quotes:"In three words I can sum up everything I've learned about life: it goes on."
    },
    {
        author:"Winston Churchill",
        quotes:"Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        author:"Franklin D. Roosevelt",
        quotes:"The only limit to our realization of tomorrow will be our doubts of today."
    },
    {
        author:" Nelson Mandela",
        quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall." 
    },
    {
        author:" Ralph Waldo Emerson",
        quotes:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },
    {
        author:" Abraham Lincoln",
        quotes: "The best way to predict the future is to create it." 
    },
];

function setdata(){
    let random = Number.parseInt(Math.random()*arrofQuotes.length +1);
    auther.innerHTML = arrofQuotes[random].author
    quotes.innerHTML = arrofQuotes[random].quotes
}

setdata();


btn.addEventListener('click',()=>{
    
    setdata();
});