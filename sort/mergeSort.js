//merge sort
const listaLivros = [{
    titulo: "Go",
    preco: 45
},{
    titulo: "C++",
    preco: 35
},{
    titulo: "Java",
    preco: 30
},{
    titulo: "PHP",
    preco: 15
},{
    titulo: "Elixir",
    preco: 50
},{
    titulo: "Rust",
    preco: 22
},{
    titulo: "Scala",
    preco: 40
},{
    titulo: "Ruby",
    preco: 28
},{
    titulo: "JavaScript",
    preco: 25
},{
    titulo: "C#",
    preco: 33
},{
    titulo: "Python",
    preco: 20
}]  

function mergeSort(array){
        if(array.length > 1){
                const meio = Math.floor(array.length/2);
                const parte1 = mergeSort(array.slice(0,meio));
                const parte2 = mergeSort(array.slice(meio,array.length));
                array = ordena(parte1,parte2);
        }
        return array;
}

function ordena(parte1, parte2){
        let posicaoAtualParte1 = 0
        let posicaoAtualParte2 = 0
        const resultado = []

        while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
                let produtoAtualParte1 = parte1[posicaoAtualParte1];
                let produtoAtualParte2 = parte2[posicaoAtualParte2];

                if(produtoAtualParte1.preco < produtoAtualParte2.preco){
                        resultado.push(produtoAtualParte1);
                        posicaoAtualParte1++
                } else{
                        resultado.push(produtoAtualParte2);
                        posicaoAtualParte2++
                }
        }

        return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));

//divide o array ate cada array ter apenas 2 valores, depois compara esses 2 valores e ordena entao compara
//um array de 2 valores com outro array de 2 valores e os ordena
//depois um array de 4 valores com outro de 4 e os ordena
//depois um array de 8 com 8 assim por diante