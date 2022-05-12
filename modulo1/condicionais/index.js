/*1)
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
6 
passou no teste
a) O código verifica as condicionais e imprime if ou else conforme a resposta do usuário. O teste verifica se deu tudo certo e não houve nenhuma quebra do código.
dentro da sua lógica
b) ele imprime passou no teste para os números pares
c) ele imprime não passou no teste para os numeros impares


2)
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
a) Para que serve o código acima?
Imprime de forma mais simples quando temos mais condicionais e deixa o código mais limpo seguindo as boas práticas

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
O preço da fruta  Maçã  é  R$  2.2

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
Se não houvesse o break ele imprimiria novamente o case da pêra. Ele serve para execução saia do bloco para não continuar executando o código

const numero = Number(prompt("Digite o primeiro número."))

3)
if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
Perguntando o usuário o primeiro número e guardando na variável numero em tipo Number para converter de string para Number

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
10 passou no teste. -10 o console não vai imprime nada, porque não esta sendo executada

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Não haverá necessáriamente um erro no console, pois não está sendo executado, não imprimindo nada, pois não é verdadeiro.
Caso tivesse o if e else, seria executado "não passou no teste", como só tem o if só irá considerar o que é verdadeiro na condicional.

Exercícios de escrita de código


const idade = Number(prompt("Qual a sua idade?"))

function podeDirigir(idade) {
  if(idade >= 18) {
  console.log("Você pode dirigir.")
} else { 
console.log("Você não pode dirigir.")
} }
 
podeDirigir(idade)

2)
const turnoDeEstudo = prompt("Qual o turno que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).")
 
function resultado(turnoDeEstudo) {
 if(turnoDeEstudo === "M") {
   return "Bom dia!"
 } else if(turnoDeEstudo === "V") {
  return "Boa tarde!"
 } else (turnoDeEstudo === "N"); {
  return "Boa noite!"

 } }

console.log(resultado(turnoDeEstudo))

 3) 

let repitaTurno = prompt("Qual o turno que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).")

switch(repitaTurno) {
  case "M":
    console.log("Bom dia!")
   break
  case "V":
    console.log("Boa tarde!")
   break
   case "N":
     console.log("Boa noite!")
    break
}


4)

const filme = prompt("Qual gênero de filme você quer assistir?")
const preco = prompt("Até quanto você quer gastar?")

function filmePreco(filme, preco){
  if(filme === "fantasia" && preco <= "15") {
    return "Bom filme!"
  } else {
    return "Escolha outro filme :("
  }
}

console.log(filmePreco(filme, preco))*/

  