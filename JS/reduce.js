const num = [3, 4, 5, 6];

const mais = num.reduce(function(acu,atual){
    return acu + atual
})
console.log(mais)

//ele roda a função indice por indice somando ou diminuindo o acu(acumulador)
//ele sempre retorna apenas um valor