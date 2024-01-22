
//O QUE É STRINGS?

/*
TIPOS DE DADOS

1º STRING -> TEXTOS 

"aspa duplas string"
' aspas simple string'
` com 
craser 
string template literals ou 
template string`

*/
console.log("aspa duplas string")
console.log('aspas simple string')
console.log(`com crase string`)

//O QUE É TEMPLATE STRINGS?

const myAge = 32
const myCar = "Audi"

const myString = `Minha idade é ${myAge}, to ficando velha,
 mais pelo menos to andando de ${myCar}
calcular 
SOMAR ${20 + 12}
 DIVIDIR ${50 / 28} 
 MULTIPLICAR ${3 * 12} 
SUBTRAIR ${52 - 20}`

console.log(myString)
//template STRINGS



//O QUE É NUMBERS?

/*
TIPOD DE DADOS
2º NUMBERS -> NÚMEROS
(*) multiplicação
(/) divisão
(+) ADIÇÃO
(-) SUBTRAÇÃO
*/

const number1 = 454511515
const number2 = 3.14 // PI
const number3 = 32
// pode fazer somas
const number = 32 * 1

console.log(` valor ${number},
 valor ${number1},
 valor ${number2},
 valor ${number3}
 `)


//O QUE É BOOLEAN?

/*
TIPOS DE DADOS 

3ºBOOLEAN -> BOLEANO

A MAQUINA SO ENTENDE ISSO
01010101010101

PEGRA DOIS VALORES
TRUE = VERDADEIRO
FALSE = FALSO

*/

//O QUE É OBJECT?

/*
TIPOS DE DADOS

4ºOBJECT -> OBJETOS

*/

//EX

/*const name = "Valssiria"
const age = 32
const address = "Rua 0"*/

const nameVal = {
  name: "Valssiria",
  age: 32,
  address: {
    street: "Rua zero",
    number: 100,
    city: "BG",
    state: "RS",
    country: "BR"
  }
}

//posso altear dados dentre do object
nameVal.address.number = 250
nameVal.name = "Lene"

//COMO POSSO NAVERGA DENTRO DO MEU OBJECT
console.log(nameVal)
// console.log(nameVal.address)
//console.log(nameVal.address.city)

// posso fazer assim tambem para econimizar cod
/*
console.log(`meu object ${nameVal}, 
meu endereço ${nameVal.address},
 meu país ${nameVal.address.city}`)*/


//O QUE É NULL & UNDEFINED?

/*
TIPOS DE DADOS

5ºNULL & UNDEFINED -> NULO / SÃO AUSÊNCIA DE INFORMAÇÕES

*/

const userVal = {
  nome: "Val",
  idade: 30,
  nomeDoConjuge: "Lene",
  address: "rua zero, 0",
  id: null
}
console.log(userVal)
// console.log(userVal.id) NULL
//console.log(userVal.id)
//ReferenceError: abacate is not defined
//console.log(abacate) udefined

//O QUE É ARRAY?

/*
TIPOS DE DADOS

6ºARAY ->  vetor -  matriz
estrutura de dados
*/

// ex
// const myAray = [20, 50, "OLA JS", {name:"val", age:20}]

//const users = [
/* {
   nome:"Val",
   idade:30,
   nomeDoConjuge: "Lene",
   address: "rua zero, 0",
   id: null
 },
 {
   nome:"Lene",
   idade:25,
   nomeDoConjuge: "Val",
   address: "rua zero, 30",
   id: null
 }
 
]*/
              /* 0    1   2  */
const myAray = [20, 50, 350]

//ALTERA POSIÇÃO NO ARAY

myAray[0] = 500

// navegando entre os arays
console.log(myAray[2])
console.log(myAray[1])
console.log(myAray[0])
console.log(myAray)

//posso colocar um objecto dentro da minha aray

const myUserAray = [
  { name: "kaul", age: 15 },//0
  { name: "Jonh", age: 30 },//1      
]

// navegando entre os arays
myUserAray[1].name = "pwoll"
console.log(myUserAray)
console.log(myUserAray[1].name)

//O QUE É IF & ELSE?

/*
TIPOS DE DADOS

7º IF & ELSE -> 
NADA MAIS É UM CONTROLADOR DE FLUXO

- IF (SE) -> faça isso
- ELSE (SE NÃO) -> Executa o else

OPERADORES DE COMPARAÇÃO

> MAIOR que

< MENOR que

== IGUAL que

*/

//EX 5 > 10 // falso 5 < 10 // true 5 == 10 // falso 5 == 5 // true

const notaDoAluno = 10 // 7 maior > true // 3 < false
const notaDeCOrte = 5 // 5 menor < 5    // 5

if (notaDoAluno > notaDeCOrte) {
  // O QUE SERÁ EXECUTADO, SE IF FOR VERDADEIRO
  console.log("Parabéns, voê passou de ano")
}
if (notaDoAluno < notaDeCOrte) {
  // SE O IF FOR FALSO, ELE ENTRA AQUI
  console.log(" voê foi reprovado de ano")
}
//else{
  // SE O IF FOR FALSO, ELE ENTRA AQUI, else é opcional! mais conselho a sempre usar

  //console.log("VOCÊ FOI REPROVADO")

//}

// ex de ==

const senhaDoUsuario = 12345 // true //12345 // false
const senhaDigitada =  12345 // true //123456

if (senhaDoUsuario == senhaDigitada ) {
 // O QUE SERÁ EXECUTADO, SE IF FOR VERDADEIRO
  console.log("Parabéns, Seja-Bem Vindo, você está logado")
  
} else {
  //SE O IF FOR FALSO, ELE ENTRA AQUI
  console.log(" Senha Incorreta")
}


//O QUE É FUNCTIONS?
/*
TIPOS DE DADOS

8º FUNCTIONS -> FUNÇÕES

TRECHO DE CODIGO QUE É EXECUTADO
SOMENTE QUANDO SOLICITADO


*/

const variavel = "abacate"

console.log(variavel)

function nomeNaTela() {
  console.log("VALDEV")
}
nomeNaTela()// aqui eu executo ela, posso chamar quantas vez eu quiser 5,6,7,8,9 assim vai

























