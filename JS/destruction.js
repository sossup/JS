
const pessoa = {
        nome:'ju',
        idade: 25
}

const comtelefone = {
        ...pessoa, telefone:1235346312
}

console.log(comtelefone)

//... pega os dados dentro do array 
const nume1 = [1,2,3]
const nume2 = [4,5,6]
const numeros = [nume1,nume2]
console.log(numeros)
const certo = [...nume1,...nume2]
console.log(certo)

//pega o resto
const [num1,num2,...outroNumero] = [1,2,3,4,5]
