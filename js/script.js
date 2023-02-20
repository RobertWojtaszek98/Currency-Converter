let currencyElement =document.querySelector(".js-currency");
let amountElement =document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let Euro = 4.77;
let GBP = 5.39;
let USD = 4.45;

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();

    let amount = +amountElement.value;
    let currency =currencyElement.value;

    let result;

    switch(currency)
    {
        case "EUR":
            result = amount/Euro;
            break;
        case "USD":
            result = amount/USD;
            break;
        case "GBP":
            result =amount/GBP;
            break; 
    }
    resultElement.innerHTML =`${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});