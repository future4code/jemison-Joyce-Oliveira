/*Exercícios de interpretação de código
1) const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true)

console.log("d. ", typeof true)

2)let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")*/

/*primeiroNumero = 10
let segundoNumero = 15

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

const soma = primeiroNumero + segundoNumero

console.log(${soma})

Exércicio de código

1)let idadeDoUsuario = prompt("Qual a sua idade?")
let idadeDoAmigx = prompt("Qual a idade do seu/sua melhor(a) amigo(a)?")


Sua idade e melhor amigx:

idadeDoUsuario = 23
idadeDoAmigx = 24
idadeDoUsuario = Number(idadeDoUsuario)
idadeDoAmigx = Number(idadeDoAmigx)

console.log("Sua idade é maior do que a do seu melhor amigo?")

let resultado = idadeDoUsuario > idadeDoAmigx
console.log(resultado)


2)let numeroPar = prompt("Insira um número par:")
numeroPar = 6

let numeroPar1 = 4
let numeroPar2 = 8


divisao = numeroPar/2
console.log("A divisão vai dar:", divisao)

divisao = numeroPar1/2
console.log("A divisão vai dar:", divisao)

divisao = numeroPar2/2
console.log("A divisão vai dar:", divisao)

numeroPar = Number(numeroPar)
numeroPar = Number(numeroPar1)
numeroPar = Number(numeroPar2)

console.log("percebi que o resultado deu number e não uma string")
console.log("se o usuário colocar um número impar sera divido da mesma forma por 2")

3)let idadeEmMeses = prompt("Qual sua idade em meses?")
let idadeEmDias = prompt("Qual sua idade em dias?")
let idadeEmHoras = prompt("Qual sua idade em horas?")

let idade = 23
idadeEmMeses = 276
idadeEmDias = 8.395
idadeEmHoras = 201.480*/

//4)
prompt("Digite 2 numeros:")
let numeros1 = 6
let numeros2 = 5

numeros1 = Number(numeros1)
numeros2 = Number(numeros2)

console.log("O primeiro número", numeros1, "é maior que o segundo", numeros2,"?")
let operacao = numeros1 > numeros2
console.log(operacao)

console.log("O primeiro número", numeros1, "é igual ao segundo", numeros2,"?")
operacao = numeros1 == numeros2
console.log(operacao)

console.log("O primeiro número", numeros1, "é divisível pelo segundo", numeros2,"?")
operacao = numeros1*numeros2
console.log(operacao)
