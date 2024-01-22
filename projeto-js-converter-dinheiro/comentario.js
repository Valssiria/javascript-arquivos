//const convertbnt = document.querySelector(".btnConvert")
//console.log(convertbnt)
//const currencySelect = document.querySelector(".currency-select")
//pegar o valor do select, a troca da moeda

//criando uma logica de programação

//function convertValues() {

   // const inputcurrencyValue = document.querySelector(".input-currency").value
    //isso eu pego o valor do meu input

    //const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    //valor em real/ para coverter

    //const currencyValueConvertd = document.querySelector(".currency-value")
    //valor convertido outras moedas


    //console.log(currencySelect.value)
    //console do select pegando o valor dele

    //const dolarToday = 4.99
    //pegar o valor dolar do dia/ um valor fixo (fingir)

    //const euroToday = 5.43
    // pegar o valor do euro do dia / um valor fingido

    //const libraToday = 6.38
    // pegar o valor de libra do dia

    // const convertdValue = inputcurrencyValue / dolarToday
    //valor convertido, vai dividir o valor do input com o dolar do dia


    // UTILIZAR O IF E ELSE

   // if (currencySelect == "dolar") {// Se o select estiver selecionado o valor de dolar. entre aqui
    
        // currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
        //     style: "currency",
        //     currency: "USD"
       // }).format(inputcurrencyValue/dolarToday)
        //).format(convertdValue)

    //}

    //if (currencySelect == "euro") {
        // Se o select estiver selecionado o valor de euro. entre aqui
        // currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        //     style: "currency",
        //     currency: "EUR"
        // }).format(inputcurrencyValue/euroToday)

//     }

//     if (currencySelect == "libra") {
//         // Se o select estiver selecionado o valor de euro. entre aqui
//         currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-DE", {
//             style: "currency",
//             currency: "GBP"
//         }).format(inputcurrencyValue/libraToday)

//     }

//     // vaolr de real brasileiro
//     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
//         style: "currency",
//         currency: "BRL"
//     }).format(inputcurrencyValue)

// }

// convertValues()

// convertbnt.addEventListener("click", convertValues)

//     //inputcurrencyValue
    //TROCAR O VALOR DELE, PEGANDO DO INPUT

    /* currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
     }).format(convertdValue)*/
    //convertdValue
    //trocar o valor do dele que é divido/ convertido

    //Intl.NumberFormat É UMA FERRAMENTA DO JS, 
    //ela permite entrar com número todo bagunçado e sair com os números todo certinho convertido

    // formatar o EURO



    // console.log(convertdValue) tudo certo o mapiamento da logica
    //console.log(inputcurrencyValue)
    //console.log("funcinou")

//     const currencyName = document.getElementById('currency-name')
//     const currencyimg = document.querySelector('.currency-img')

//     if (currencySelect.value == 'dolar') {
//         currencyName.innerHTML = 'Dólar americano'
//     }
//     currencyimg.src = './asset/estado-usd.png'

//     if (currencySelect.value == 'euro') {
//         currencyName.innerHTML = 'Euro'
//         currencyimg.src = './asset/euro.png'
//     }
//     if (currencySelect.value == 'libra') {
//         currencyName.innerHTML = 'Libra'
//         currencyimg.src = './asset/libra.png'
//     }
//     if (currencySelect.value == 'bitcoin') {
//         currencyName.innerHTML = 'Bitcoin'
//         currencyimg.src = './asset/bitcoin.png'
//     }

   // convertbnt.addEventListener("click", convertValues)
//click é quandoo button for chamando no click dele e ele chamar a funcão