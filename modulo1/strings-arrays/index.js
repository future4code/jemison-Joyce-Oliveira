/* interpretação de código
1)let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array)   // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9

2) const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27*/

/* escrita de código
1) let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

let concatenando = "O e-mail " + emailDoUsuario + "foi cadastrado com sucesso. Seja bem-vinda(o)! " + nomeDoUsuario
let template = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o)! ${nomeDoUsuario}`

console.log(concatenando)
console.log(template)*/

/*2) let comidasPreferidas = [
"strogonoff",
"lasanha",
"pizza",
"sushi",
"tapioca"
]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas: " + comidasPreferidas)

3) let listaDeTarefas = []
listaDeTarefas = prompt("Diga 3 tarefas para realizar no seu dia, listando cada uma:") 
listaDeTarefas = ["trabalho", "estudo", "descanso"]
console.log(listaDeTarefas)
retorno = prompt("Qual tarefa da sua lista você já realizou? 0, 1 ou 2?")
console.log(retorno)
listaDeTarefas.splice(retorno, 1)
console.log(listaDeTarefas)*/
