const result = document.querySelector('#result')
console.log(result);
const option = document.querySelector('#option')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const sumbit = document.querySelector('button')

sumbit.addEventListener('click',()=>{
    console.log("ksiafh");
    console.log(option.value);
    console.log(result.value);
    console.log(num1.value , num2.value);
    // console.log( num1.value  num2.value); 
   switch(option.value){
    case "plus":result.value =( Number(num1) + Number(num2)); 
   }
})