//2. Criando o Inventário do herói:
// O herói começa sua aventura com alguns itens básicos. Vamos armazenar esses intens em array.
let inventário = ["Espada de madeira:3", "Espada Grande:5", "Escudo da coragem:3", "Elixir da coragem:5", "Amuleto do guardião:15"]

// 3. Exibindo o invetário inicial do herói
console.log("o meu inventário é:", inventário)
console.log("itens: ", inventário.length)

// 4. Encontramos um tesouro
// O herói encontra um baú de tesouro e ganha um novo item!!!!!!!!!!!
 inventário.push("arco da variáveis:5")
 console.log(inventário)
 console.log("itens: ",inventário.length)

 // 5. Enfrentando um inimigo 
 // O herói enfrenta um globoin chamado GoblinDoTigrinho🐯. Qual arma você vai usar???
 console.log("Um goblin apareceu!!! Prepare-se para a batalha!!!Dano:13")
 // Usando itens do inventário para lutar
 let itemUsado1 = inventário[0] /// índice do item
 console.log(`Você ataca o goblin com sua ${itemUsado1}`)

// 7. Um Golem aproveita sua distração e o ataca violentamente  com um soco sismico! Dano: 9.. Como você revida?
let itemUsado3 = inventário[0]
console.log(`Você revida com ${itemUsado3}`)
// calcule seus recursos
let recursosResistencia =   2
console.log(`Meus recursos de resistênciaa: ${recursosResistencia} `)
// 8. Finalmente a aventura... por enquanto...Nosso adeus não é para sempre...
// Como você finalizaria o golem?
let itemUsado4 = inventário[0]
console.log(`O herói finaliza sua aventura com um golpe,utilizando : ${itemUsado4}`)

//exemplo1
let cores = ["azul","verde"];
cores.unshift("vermelho")
console.log(cores); // ["vermelho", "azul", "verde"]

let listaCelular =[`Iphone", "Sansung", "Poco", "Xiome", "Panasonic", "Nokia`]
console.log(`primeiramente a lista anterior: ${listaCelular}`)

//console.log( listaCelular.unshift("Motorola") )

console.log("------------------------------------------------------------")
listaCelular.unshift("Motorola");

console.log("\n Depois de adicionar `Motorola`:")
console.log(listaCelular)

let frutas = ["maçã", "banana" , "laranja"]
frutas.shift()
console.log(frutas);//["banana", "laranja"]

//ex1
let Cidades = ["São Paulo", "Paris", "Madrid"]
console.log(`total da cidades : ${Cidades}`)
Cidades.shift()
console.log(`Crl...uma cidade desapareceu: ${Cidades}`)

//epls

const meusPeixes = ["palhaço", "mandarim", "esturjão"]
console.log(meusPeixes)

meusPeixes.pop()
console.log(meusPeixes) //["palhaço", "mandarim"]

//ex6
console.log("exercicio pop")
let listaDeTarefas =["jogar videogame", "matar um demonio", "limpar a casa", "programar no pc", "olhar filme"]
console.log(`\ntarefa concluida: ${listaDeTarefas[4]}`)
listaDeTarefas.pop()
console.log(`lista atualizada: ${listaDeTarefas}`)

//Método splice(i, n)
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// indicea (i)   0    1    3    4    5    6    7    8 
console.log(letras)

letras.splice(2, 1)
//       letras = ["A", "B", "D", "E", "F", "G", "H"]     -> da array letras, na posição 2 ("C") remove 1 (o próprio c)
                                                       // -> da array letras, na posição 3 ("D") remove 2 (E e F)
     
// indices (i)      0    1    2    3    4    5    6
console.log(letras)
letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]
console.log(letras) 

// ex1
let deck = ["Pikachu","Charmander","Bulbasar", "Pikashu", "Squirtle", "Meowth"];
// 1. remover o repetido (indice 3)
//  splice(3,1) remove 1 elemento considerando o indice 3
deck.splice(3, 1) 
console.log(deck)

// 2. Inserir o Snorlax entre 3 e 4 
// Aqui meus queridos aluninhos, podemos utilizar o  splice para adicionar tbm... porém utilizando o 0 na sintaxe aquela, logo:
// splice(i,n) ---> a partir/na posição i retiro n elementos
// quando usamos o 0 no lugar do n ~ sinalizamos que não estamos tirando nada... então ele adiciona
deck.splice(3,0, "Snorlax")
console.log(deck)
// Adicionar a Eevee no lugar do Neowtrh
deck.splice(5,1, "Eeevee")
console.log(deck)

// concat()
let frutas2 = ["maçã", "banana"]
let legumes = ["cenoura", "batata"];

let alimentos = frutas2.concat(legumes);
console.log(alimentos); // ["maçã", "banana", "cenoura", "batata"]
 
//ex
let pacote1 = ["Pikashu", "Bulbasaur", "Charmander"];
let pacote2 = ["Squirtle", "Jigglypuf"];
let pacote3 = ["Meowth", "Snorlax", "Eevee"];

let cartasTotal = pacote1.concat(pacote2, pacote3)
console.log(`baralho completo: ${cartasTotal}`)

console.log(`número de cartas: ${cartasTotal.length}`)


// sort() é um metódo do Javascript que serve para ordernar os elementos de um array.
// Como Fuciona?


let Frutas = ["Banana", "Maçã", "Laranja"];
frutas.sort();
console.log(Frutas);
// Saída: ["Banana", "Laranja" "Maçã"]



// Desafio extremo
let arrayFrutas = ["maçã", "banana", "laranja"]

//Primeira mudança:
arrayFrutas = arrayFrutas.push("morango")
console.log(arrayFrutas)

//Segunda mudança:
arrayFrutas.unshift("abacaxi")
console.log(arrayFrutas)

//Terçeira mudança:
arrayFrutas.shift()
console.log(arrayFrutas)

//Quarta mudança:
arrayFrutas.pop()
console.log(arrayFrutas)

//Quinta mudança:
arrayFrutas.splice(1, 1, "manga")
 
// Exibe o array final
console.log(frutas)

