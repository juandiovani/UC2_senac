 //desafio da aula
 let listaIngredientes =["Ovos", "Farinha", "Açucar", "Óleo", "Leite", "Fermento em pó", "Essência de baunilha"]
 let basedobolo = [listaIngredientes [0], listaIngredientes [1], listaIngredientes [2], listaIngredientes [3], listaIngredientes [4], listaIngredientes [5],listaIngredientes [6]]
console.log(`massa do bolo: ${basedobolo}`)
let recheio1 =[listaIngredientes [4], listaIngredientes[6],listaIngredientes[0]]
console.log(`recheio 1: ${recheio1}`)
let recheio2 =[listaIngredientes [1],listaIngredientes[2],listaIngredientes[3]]
console.log(`recheio 2: ${recheio2}`)
let recheio3 =[listaIngredientes[4],listaIngredientes[1],listaIngredientes[6]]
console.log(`recheio 3: ${recheio3}`)

let boloPronto =[basedobolo,recheio1,basedobolo,recheio2,basedobolo,recheio3]
console.log(`
${boloPronto[1]}
${boloPronto[2]}
${boloPronto[3]}
${boloPronto[4]}
${boloPronto[5]}
${boloPronto[6]}`)