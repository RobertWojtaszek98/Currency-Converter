{



const CalculateResult = (currency,amount) => {

    const Euro = 4.77;
    const GBP = 5.39;
    const USD = 4.45;
    switch(currency)
    {
        case "EUR":
            result = amount/Euro;
            return result;
        case "USD":
            result = amount/USD;
            return result;
        case "GBP":
            result = amount/GBP;
            return result; 
    }
};

 const onFormSubmit =(event) =>{
  
        event.preventDefault();
    
        const currencyElement =document.querySelector(".js-currency");
        const amountElement =document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
    
        const amount = +amountElement.value;
        const currency =currencyElement.value;
    
        let result = CalculateResult(currency,amount);
    
        resultElement.innerHTML =`${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
 }
const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
        };
    init();
}