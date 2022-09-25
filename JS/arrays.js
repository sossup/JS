const Lista = ['isso','é','uma','lista']

const duasListas = [[1,2,3],[3,4,[2],5],2]

console.log(duasListas)

console.log(Lista.length)

//nao precisa especificar os 3 no console, pode pegar apenas o item ou indice!
Lista.forEach(function(item, indice, array){
    console.log(item, indice);
})

let adicionar = Lista.push('adicionado','noFinal') //[ 'isso', 'é', 'uma', 'lista', 'adicionado', 'noFinal' ]

let remover = Lista.pop(); //[ 'isso', 'é', 'uma', 'lista', 'adicionado' ]

let removerInicio = Lista.shift() //['é', 'uma', 'lista', 'adicionado' ]]

let addInicio = Lista.unshift('isso') //[ 'isso', 'é', 'uma', 'lista', 'adicionado' ]

let procurado = Lista.indexOf('uma') //2

                                //indice,qtd
let removeIntervalo = Lista.splice(2,1)     //[ 'isso', 'é', 'lista', 'adicionado' ]

let recortar = Lista.splice(0,2) //[ 'isso', 'é' ]

let substituir = Lista.splice(1,0,'ola')

console.log(Lista)
console.log(recortar)


let soma = Lista[0] +' '+ Lista[1]
console.log(soma)