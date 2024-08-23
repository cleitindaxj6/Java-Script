// Funçoes
let x ="olá";
console.log(x)
x = 8;
y = "Melancia"

imprimeTexto(y)

//Declarar uma funçao
// 1: (Declarar)
function imprimeTexto(texto){
    console.log(texto)
}

// 2: Chamar/executar a funçao
imprimeTexto(x)
imprimeTexto("Olá Pra todo mundo")

function soma(){
    return 25 +98
}
console.log(soma())
imprimeTexto(somaNumeros(2, 98))
imprimeTexto(somaNumeros(23, 34))

function somaNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}`
}
// A ordem dos parametros é importante!!
imprimeTexto(nomeIdade("Henrique", 17))
imprimeTexto(nomeIdade(8, "Pedra"))

imprimeTexto(multiplicacao())
// Voce pode definir um paramentro inicial para a funçao
function multiplicacao(numeroA = 2, numeroB = 15){
    return numeroA * numeroB
}

imprimeTexto(multiplicacao(somaNumeros(2,5),somaNumeros(10, 4)))

//Expressao de funçao
const constanteSoma =function(nume1, nume2){
    return nume1 + nume2
}
console.log(constanteSoma(2,4))

//Funçoes e var sao "listadas" no topo do arquivo
//Arrow Fuction(Funçao abreviada, usada em resposta a uma açao)
const apresentaArrow = nome => `Meu nome é ${nome}`;
const somaArrow = (n1, n2) => n1 +n2;
console.log(apresentaArrow("Henrique"))
console.log(somaArrow(12,98))

const somaNumeroPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "Essa função e para pequenos"
    }
    else{
        return num1 + num2;
    }
}

console.log(somaNumeroPequenos(2,9))
