const month = document.querySelector('.month')
const day = document.querySelector('.day')
const curDate = document.querySelector('.date')
const year = document.querySelector('.year')

const date = new Date();
year.innerHTML = date.getFullYear();
curDate.innerHTML = date.getDate();
day.innerHTML = date.toLocaleDateString("en", {
    weekday: "long",
})

month.innerHTML = date.toLocaleDateString("en", {
    month: "long",
})

