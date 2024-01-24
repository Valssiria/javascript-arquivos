/*

OPERADORES LOGICOS

&& > E > PESSOA EXIGENTE / PESSOA OBDIENTE

TRUE && TRUE && = TRUE
TRUE && FALSE = FALSE 
FALSE && FALSE = FALSE

|| > OU > TANTO FAZ / FILHO ESPERTINHO

TRUE || TRUE && = TRUE
TRUE || FALSE = TRUE
FALSE || FALSE = FALSE

! > NEGAÇÃO

!TRUE = FALSE
!FALSE = TRUE


*/

console.log( false && true && false && true)// OBDIENTE TRUE

/*
mariazinha é exigente. ela não quer o joãozinho
bonito &&(e) inteligente&&(e) programador&&(e) tem que ter carro
a mariazinha quer isso.

joãozinho não é bonito / inteligente/ programador/ tem carro
 */

console.log( false || false || false || true) // ESPERTINHO FALSE

/* 
    luluzinha não ´r tão exigente. ela quer o paulinho
    bonito ||(ou) inteligente ||(ou) programador ||(ou) tem que ter carro 
   paulinho não é bonito / burro /  é  programador/ não tem carro
*/

console.log(!false)
console.log(!true)


/* exemplos*/

const digitarAsenha = true//false //true
const digitarOtoken = true //true//false //true
const digitarDaconta = true //false //true

// if (digitarAsenha || digitarOtoken || digitarDaconta) {
//     console.log("logado com sucesso")
    
// } else {
//     console.log("AUTENTICAÇÃO FALHOU")
// }

// if (digitarAsenha && digitarOtoken && digitarDaconta) {
//     console.log("logado com sucesso")
    
// } else {
//     console.log("AUTENTICAÇÃO FALHOU")
// }

if (! (digitarAsenha && digitarOtoken && digitarDaconta)) {
    console.log("logado com sucesso")
    
} else {
    console.log("AUTENTICAÇÃO FALHOU")
}