let num = [3, 4, 5, 6];

let vezes3 = num.map(function(valor){
    return valor *3;
});

console.log(vezes3); // [9, 12, 15, 18]

//map passa por cada valor da array e executa a função para cada valor