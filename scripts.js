

// DOM -> DOCUMENT OBJECT MODE

/*
 ARVORE DE ELEMENTOS DO NAVEGADOR
  JS TEM O PODER DE MANIPULAR O A DOM

  VOCÊ SABE MANIPULAR A DOM NO JS? SIM

*/


// CONECTANDO JAVASCRIPT NOS NOSSOS SITES

//mconsole.log("Óla agora estou por aqui")

// entendendo próximos passos

/* todas vezes quamdo eu quiser pegar algo documento no HTML,
 trocar textos, cores eu uso o document que refere ao html */

 //getElementById => TRÁS UM ELEMENTO PELO ID DELE, ele vai lá pergar no html pelo id.

 /*const input = document.getElementById("input")

 console.log(input)*/

// getElementByClassName => Trás todos os elementos com essa classe, poder estar emm todos elemento ele vai peghar.

/* const elements = document.getElementsByClassName("paragraph-js")

console.log(elements) */

// getElementByTagName => TRÁS TODOS OS ELEMENTOS COM ESSA TAG, tanto com a tag p,h1,button,input

/*const elements = document.getElementsByTagName("button")

console.log(elements)*/

//getElementByName => trás todos os elementos com esse name,

/*const elements = document.getElementsByName("nome-completo")

console.log(elements)*/

// querySelector => TRÁS UM ELEMENTO, O PRIMEIRO QUE ENCONTRAR, posso encontar pelo nome da class e do seu id 
//ex: ".paragrafo e "#button,input" assim vai.
// posso encontar usando atalho assim button.abacate, ele trás varias opçoes ele é muito versatil e pegar o que a quer nele.


/*onst elements = document.querySelector("button.paragraph-js")

console.log(elements)*/



// querySelectorAll => TRÁS TODOS OS ELEMENTOS QUE ENCONTRAR, tanto como nomes das class e tags p,h1...

// const elements = document.querySelectorAll(".paragraph-js")

// console.log(elements)

//ALTERANDO ELEMENTO NA PRÁTICA

// posso trocar o texto do placeholder e valor também colocando um número..

//const element = document.querySelector("#input")

//element.placeholder = "Agora sou eu JS"
//console.log(element.placeholder)
//element.value= 123455
//console.log(element.value)

//const imgVal = document.querySelector("img")
// assim posso ver so o src da minha imagem
// trocar imagem assim, 
//tenho o poder de acessar todos meus atributo e elementos de dentro do meu html
//imgVal.src= "./amor.jpg"
//imgVal.style.width = "400px"
//console.log(imgVal.src)


//ALTERANDO TEXTOS & HTML NO JAVASCRIPT

/* 
textContent => PEGA TODO O CONTEUDO

innerText => PEGA APENAS O TEXTO

innerhtml => PERMITE ADICIONAR HTML E TEXTOS, trás tudo dentro dele

*/

//const alterandoTEXT = document.querySelector(".paragraph-js")

//alterandoTEXT.textContent = "novo texto é esse"
//alterandoTEXT.innerText = "novo texto agoram é esse"
//alterandoTEXT.innerHTML = "novo texto agoram é esse html"

//no innerHTML permite que eu altere e coloque html no meio

//alterandoTEXT.innerHTML = "text alterado <b>html</b> é esse agora"
//posso sumir com um paragrafo ou tag utilizando isso

//alterandoTEXT.innerHTML = " apaguei o texto do paragrafo"



//console.log(alterandoTEXT.textContent)// SÓ HTML
//console.log(alterandoTEXT.innerText)// LEVA EM CONTA O CSS
//console.log(alterandoTEXT.innerHTML)// TRÁS TUDO, permite colocar html

//Alterando CSS (estilo) no javascript

const button = document.querySelector(".main-button")
button.style.background = "red"
button.style.borderRadius = "50px"
button.style.fontSize = "50px"
button.style.color = "white"


//EVENTOS => onclick quando cliccar no butão
const pVisible = document.querySelector(".visiblity")

const elements = document.querySelector("#input")

function cliqueNoBotao() {
  //alert("Botão clicado com sucesso")
  const imgVal = document.querySelector("img")

  //console.log(input.value)
  imgVal.src= "./onclick-js.jpg"
  imgVal.style.width = "300px"
  pVisible.innerHTML = input.value
}

// EVENTO ONKEPRESS PEGAR O CLIQUE DO TECLADO


function digiteiNoInput() {
 console.log("Digitei no input com sucesso")
 // console.log(input.value)

}

