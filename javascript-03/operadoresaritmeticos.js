/*


OPERADORES ARITMÉTICOS

+ => ADIÇÃO
- => SUBTRAÇÃO
/ => DIVISÃO
* => MULTIPLICAÇÃO
% => RESTO
++ => INCREMENTO
-- => DECREMENTO
** => EXPONENCIAL

*/

const ad = 2 + 2
const sub = 5 - 2
const div = 12 / 6
const mult = 3 * 5

//resto
const resto = 11 % 2//vai sempre sobra 1
//incremento desse jeito com const
// const incre0 = 20
// const incre1 = incre0 + 1
// assim com atalho é menos cod com let
let incre0 = 20
incre0++
//decremento
let decrem = 20
decrem--

//atalhos 
let resul = 31
console.log(++resul)

let result = 31
console.log(--result)

console.log(incre0, decrem)
console.log(ad, sub, div, mult, resto)

//exponencial
let expo = 2**3//2 ao cubo
console.log(expo)