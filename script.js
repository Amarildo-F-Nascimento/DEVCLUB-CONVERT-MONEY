const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertFromSelect = document.querySelector("#convert-from")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert",)//valor em real
    const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas
    let valueConvertFrom = 0;

    const dolarToday = 5.0
    const euroToday = 5.2
    const libraToday = 6.0
    const realToday = 1;
    const bitcoinToday = 155.249


    if(convertFromSelect.value == "real"){
        valueConvertFrom = realToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
    }
    if(convertFromSelect.value == "dolar"){
        valueConvertFrom = dolarToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
    }
    if(convertFromSelect.value == "euro"){
        valueConvertFrom = euroToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
    }
    if(convertFromSelect.value == "libra"){
        valueConvertFrom = libraToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
    }
    if(convertFromSelect.value == "bitcoin"){
        valueConvertFrom = libraToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
    }

    

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue * valueConvertFrom / dolarToday)
    }
   
 
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue * valueConvertFrom / euroToday)
    }
    
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue * valueConvertFrom / libraToday)
    } 

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue * valueConvertFrom / realToday)
    } 
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue * valueConvertFrom / bitcoinToday)
    }     
}

function changeConvertFrom() {
    const currencyName = document.getElementById("convert-from-currency-name")
    const currencyImg = document.querySelector("#convert-from-currency-img")


    if (convertFromSelect.value == "real") {
        currencyName.innerHTML ="Real"
        currencyImg.src = "./assets/real.png"
    }

    if (convertFromSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
       
    }

    if (convertFromSelect.value == "euro"){
        currencyName.innerHTML ="Euro"
        currencyImg.src = "./assets/euro.png"
    }
    
    if (convertFromSelect.value == "libra"){
        currencyName.innerHTML ="Libra"
        currencyImg.src = "./assets/libra.png"
    }
    if (convertFromSelect.value == "bitcoin"){
        currencyName.innerHTML ="Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

    
   
    convertValues()
    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")


    if (currencySelect.value == "real") {
        currencyName.innerHTML ="Real"
        currencyImg.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
       
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML ="Euro"
        currencyImg.src = "./assets/euro.png"
    }
    
    if (currencySelect.value == "libra"){
        currencyName.innerHTML ="Libra"
        currencyImg.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML ="Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    
   
    convertValues()
    
}
convertFromSelect.addEventListener("change", changeConvertFrom)
currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)