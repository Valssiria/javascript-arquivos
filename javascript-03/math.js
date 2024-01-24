// tudo sobre o MATH


/* MATH => Matemática

= pow(2,2) / potência / 2² = 4
= sqrt(25,2) / raiz V25
= PI / 3,14
= ceil / teto => arredondar para cima
= floor / chão => arredondar para baixo

= random() / número aleatorio 0 e 1 
*/

//MATH.POW

// const potencia = Math.pow(5,3)//petência

// console.log(potencia)//potência / 2² = 4

// const raiz = Math.sqrt(25,3)

// console.log(raiz)//raiz V25

// const pi = Math.PI

// console.log(pi) //3,14

// const ceil = Math.ceil(3.14)

// console.log(ceil)//arredondar para cima


// const floor = Math.floor(3.14)

// console.log(floor)// arredondar para baixo


// const roanDom =Math.floor(Math.random())

// console.log(roanDom)// aqui utilizei o math.floor para redondar para baixo o random



const pVisibilit = document.querySelector(".result")
function generateNumber() {


    const valorMin = Math.ceil(document.querySelector(".min").value)//cima/teto
    // document.querySelector(".min").value
    // Math.ceil(document.querySelector(".min").value)//cima/teto
    const valorMax = Math.floor(document.querySelector(".max").value)//chão
    //document.querySelector(".max").value
    //Math.floor(document.querySelector(".max").value)//chão
                /* posso fazer assim (<=) ou (>) */
    if (valorMin >= valorMax) {

        alert("O valor mínimo  tem que ser MENOR que o valor máximo")
    } else {
        const twoNumber = Math.floor(Math.random() * (valorMax - valorMin + 1) + valorMin)

        pVisibilit.innerHTML = twoNumber
        pVisibilit.style.opacity = 1

    }

    // console.log(valorMax, valorMin)

}












