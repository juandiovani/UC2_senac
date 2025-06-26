const FRASE = "Hoje comi cenoura, adoro cenoura"
const novaFrase = FRASE.replaceAll("cenoura","batata")
console.log(novaFrase)

const Raças =["pincher","dogo agertino","pastor alemão","pitbull","puldou"]
console.log("a primeira raça: ", Raças[0])
console.log(`a minha raça favorita: ${Raças[1]} `)

const guardaroupas =["camiseta","camisa","regata","bermuda","casaco","calça","sapatos"]
const lookpasseiopark = [guardaroupas[2] , guardaroupas[3]]
console.log(`look parque: ${lookpasseiopark}`)
const lookentrevistadeemprego = [guardaroupas[1], guardaroupas[5], guardaroupas[6]]
console.log(lookentrevistadeemprego)
const lookshowanoite =[guardaroupas[0], guardaroupas[3], guardaroupas[6]]
console.log(lookshowanoite)
const lookficaremcasaassistindofilme =[guardaroupas[2], guardaroupas[3]]
console.log(lookficaremcasaassistindofilme)

const listaHomer =["rosquinha", "rosquinha", "rosquinha"]
console.log(`o Homer come: ${listaHomer} alimentos`)

const listaScooby =["hamburguer","batata frita","milkshake","biscoito Scooby","pizza"]
console.log(`o Scooby come: ${listaScooby} alimentos`)

const listaMagali = ["melancia", "maçã", "banana", "abacate"]
console.log(`a Magali come: ${listaMagali} alimentos`)

const listaBob = ["hambúrguer de siri", "refri", "batata", "sorvete", "molho seceto"]
console.log(`o Bob come: ${listaBob} alimentos`)

//verifica se possui um item específico na lista
const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine"]
seriesBoas.includes("Breaking Bad") // true
seriesBoas.includes("Game of Thrones") // false

//exercício 4
const pokemonsCapturados = ["Pikashu","Charmander","Bulbasaur","Squirtle"]
const verificação = pokemonsCapturados.includes("Picachu")
console.log(`existe o Picachu? ${verificação} `)
const verificação2 = pokemonsCapturados.includes("Neowth")
console.log(`existe o Neowth? ${verificação2}`)

const numeros = [1,2,3]

numeros.push(4)
console.log(numeros)// [1,2,3,4]

numeros.push(5, 6, 7)
console.log(numeros) // [1, 2, 3, 4, 5, 6, 7]

// exercícios1 
const listaDeCompras = ["arroz","feijão","macarrão"]
console.log("crl...mais coisa pra comprar pqp")
listaDeCompras.push("leite","farinha","banana","canela","café","frango","margarina","farofa")
console.log(listaDeCompras)

