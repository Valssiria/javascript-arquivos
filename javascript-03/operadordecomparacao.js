/*

OPERADOR DE COMPARAÇÃO

== > IGUAL // COMPARA O VALOR, MAS NÃO O TIPO
=== > TOTALMENTE IGUAL // COMPARA O VALOR E O TIPO
// === vamos utilizar sempre esse pois ele mostrar o valor e o tipo

!= > DIFERENTE // ELE COMPARA O VALOR, MAS NÃO O TIPO
!== > TOTALMENTE DIFERENTE // COMPARA O VALOR E O TIPO

*/


const firstNumber = 30// numero
const seccondNumber = "30" //30numero //"30" string falso //30 true //40 false
// const result = 
            /* assim ele so estar comparando se é igual == 
console.log(firstNumber == seccondNumber) */
 /* assim ele so estar comparando se é igual e tipo deferente uma string e numero
console.log(firstNumber === seccondNumber)//false//true */


/* msm valor para meu if true dois numeros// false pois um é numero e outro é string */
if (firstNumber === seccondNumber) {
    console.log("sim, eles são iguais")
} else{
    console.log("não são iguais")
}

// comaparação de deferente
const firstNumber1 = 10 //numero false
//100 numero false não sao diferente //30 numero diferente 
const seccondNumber2 = "10"// string false
//100 numero false não sao diferente //49 numero diferente

console.log(firstNumber1 !== seccondNumber2)
//true são diferente de tipos
//console.log(firstNumber1 != seccondNumber2)//falso//false
// if (firstNumber1 != seccondNumber2) {
//     console.log("sim, eles são diferentes")
// } else{
//     console.log("não, não são diferente")
// }
