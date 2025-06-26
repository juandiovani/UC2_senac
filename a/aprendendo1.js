const nome = "Mika"
const idade = 27
const frase = `Meu nome é ${nome}  e tenho  ${idade}   anos`
console.log(frase)

const myname = "Juan"
const cor = "azul"
const filme = "Deadpool e Wolverine"
const time = "Grêmio"
const apresentação =`Meu nome é ${myname} e minha cor favorita é ${cor}.Gosto muito de estudar no SENAC e curto o ${filme}.Além disso, meu time é o ${time}.`
console.log(apresentação)

const frase2 = "Meu none é" + myname + "e minha cor favorita é" + cor + "gosto muito de estudar no SENAC e curto o filme" + filme + "além disso, meu time é o" + time

const meunome = "Juan Diovani"
console.log("o número de caractere é: ",meunome.length)

//--------------------------------------------------------------
const comidapreferida = "Massa com guisado"
console.log(comidapreferida.length) // length conta os caractéres da string armazenada na variável
console.log(myname.trim())
console.log(comidapreferida.trim())

const Frase = "Hoje comi cenoura"
Frase.includes("cenoura")
Frase.includes("batata")
console.log(Frase.includes("cenoura"))
console.log(Frase.includes("batata"))

const FRASE = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura","batata")
console.log(novaFrase)