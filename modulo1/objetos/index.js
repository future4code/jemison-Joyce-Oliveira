/* Exercícios de interpretação de código
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

 // Matheus Nachtergaele
 Virginia Cavendish
 canal Globo, horario 14h


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?

nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD" 

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Espelhamento, podendo copiar, substituir e adicionar, complementando os dadodos

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

 a) O que vai ser impresso no console? 
false 
undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Esse valor foi impresso porque foi indentificado em propriedades a variável, 
retornando o que esta amarzenado nela. Não foi retornado a altura pois não 
houve um espelhmento e nem foi citada na propriedade, sendo undefined.



//  //Exemplo de entrada
let pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
    
    }

   function fraseSaida() {

 }

 console.log("Eu sou Amanda, mas pode me chamar de:", pessoa.apelidos[0],  pessoa.apelidos[1], "ou", pessoa.apelidos[2] )
 
    let novosApelidos = {
        ...pessoa, 
        nome: "Joyce",
        novoNome:{
            nome: "Joyce",
            apelidos: ["Joy", "Joycao", "Jojoca"],
        }
        
    }

 console.log("Eu sou", novosApelidos.novoNome.nome, "mas pode me chamar de:", novosApelidos.novoNome.apelidos[0],  novosApelidos.novoNome.apelidos[1], "ou", novosApelidos.novoNome.apelidos[2])


 const identidade = {
    nome: "Joyce",
    idade: 23,
    profissao: "Promotora",
   }
   

function retorneArray() {
    const informacoes = {
        ...identidade,
        nome: ["Joyce"],
        idade: [23],
        profissao: ["Promotora"],
        }
}
       
retorneArray()
console.log([identidade.nome])
console.log([identidade.nome.length])
console.log([identidade.idade])
console.log([identidade.profissao])
console.log([identidade.profissao.length])


const carrinho = []
const frutaMercado = {
    fruta1: "Limao",
    fruta2: "Banana",
    fruta3: "Goiaba",
    disponibilidade: true,
}

function fruta() {
const objetoFruta = {
    ...frutaMercado,
    fruta1: "Limao",
    ...carrinho,
    fruta1: carrinho
}
}

fruta()
console.log(frutaMercado.fruta1)*/