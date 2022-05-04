 /*
1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

1)O que o código abaixo está fazendo? Qual o resultado impresso no console?
O laço esta continuando armazenando  valor na variável e somando até chegar no valor de 10. O resultado foi 10

2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


a) O que vai ser impresso no console?
Números maiores que 18, começando pelo 19
b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
Sim, podemos usar da seguinte forma:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    numero = Array.length
	}

console.log(lista)


3)

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
Seria impressos em cada linha mais * asteriscos até finalizar completando 4 


Exercícios de escrita de código


function tudo (array){ 
let soma = 0
let bichinho = Number(prompt("quantos bichinhos de estimação você tem?"))
while(bichinho !== 0){
soma = soma + bichinho
bichinho = Number(prompt("Que pena! Você pode adotar um pet!"))
if(bichinho > 0){
bichinhoNomes = Number(prompt("Qual o nome deles?"))
console.log(bichinhoNomes)
  }
 }
}
tudo()


const listaNumeros = [1, 2, 3, 4]
for (let numero of listaNumeros) {
    numero = listaNumeros
	}

console.log(listaNumeros)

  

*/