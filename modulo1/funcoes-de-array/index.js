/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  a) O que vai ser impresso no console?
  Será mapeado todo array, imprimindo no cosole item, index e array



  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  a) O que vai ser impresso no console?
  Será impresso no console os nomes, pois foi feito o mapeado apenas os nomes contidos no array 
  
  
  
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  a) O que vai ser impresso no console?
  Vai imprimir no console os apelidos que foram armazenados no array de menos o Chijo, pois foi 
  solicitado todos os apelidos diferentes do !== "Chijo"
  
  */

// Exercícios de escrita de código
//1) a) Crie um novo array que contenha apenas o nome dos doguinhos
  
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const cachorrinhoArray = pets.map((item, index, array) => {
    return item.nome
 })

 console.log(cachorrinhoArray)


 //b) Crie um novo array apenas com os cachorros salsicha
 

 const pets1 = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const racaPets1 = pets1.filter((item, index, array) => {
    return item.raca === "Salsicha"

 })

    console.log(racaPets1)


 //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que 
 //são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
 



 const pets2 = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const racaPets2 = pets2.filter((item, index, array) => {
    return item.raca === "Poodle"

 })

    console.log(racaPets2)
    
const poodle = racaPets2.map((item, index, array) => {
    return item.nome 

})

console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", poodle)

//2)
 
 const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
 

//a) Crie um novo array que contenha apenas o nome de cada item

const objetoNome = produtos.map((item, index, array) => {
    return item.nome 

})

console.log(objetoNome)


 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 const precoNome = produtos.map((item, index, array) => {
    return item.nome, ((item.preco * 5 / 100).toFixed(2))

})
console.log(precoNome)

 ////c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const objetoBebida = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(objetoBebida)


 //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"*/

 const objetoYpe = produtos.map((item, index, array) => {
    return item.nome === "Ypê"
})

console.log(objetoYpe)

 //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos 
// itens cujo nome contenha a palavra "Ypê"
 
const itemFrase = objetoYpe.map((item, index, array) => {
    return item.nome, item.preco

})

console.log("Compre", [nome], "por", [preco])
 

 