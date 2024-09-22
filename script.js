const btnIncrement = document.querySelector("#btn-increment"); 
const btnDecrement = document.querySelector('#btn-decrement');
const btnReset = document.querySelector('#btn-reset');
const displayCount =document.querySelector('#display-count');
let  counterValue = 0;



btnIncrement.addEventListener('click', () =>{
    counterValue +=1;
displayCount.textContent =  counterValue;
})

btnDecrement.addEventListener('click', () =>{

    counterValue -=1;

displayCount.textContent=  counterValue;
})

btnReset.addEventListener('click', () =>{
    counterValue = 0;
displayCount.textContent =  counterValue;
})