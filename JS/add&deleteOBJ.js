const numeros = {
    num1: 1,
    num2: 7,
    num3: 8,
    cpf: '124334647'
}

numeros.num4 = 2

delete numeros.num2

numeros.num1 = 9

console.log(numeros)
console.log(numeros.cpf.substring(0,3))