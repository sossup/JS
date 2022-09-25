const listaLivros = [{
    titulo: 'Go',
    preco: 45
},{
    titulo: 'C++',
    preco: 35
},{
    titulo: 'Java',
    preco: 30
},{
    titulo: 'PHP',
    preco: 15 
},{
    titulo: 'Elixir',
    preco: 50
},{
    titulo: 'Rust',
    preco: 22
},{
    titulo: 'Scala',
    preco: 40
},{
    titulo: 'Ruby',
    preco: 28
},{
    titulo: 'JavaScript',
    preco: 25
},{
    titulo: 'C#',
    preco: 33
},{
    titulo: 'Python',
    preco: 20
}]

function quickSort(array, esquerda, direita){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual -1);
        }
        if(indiceAtual < direita ){
            quickSort(array, indiceAtual, direita)
        }
    }
    
    return array;
}

function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para] 

    array[para] = elem1
    array[de] = elem2
    
}

function particiona(array, esquerda, direita){
    console.log('array',array)
    console.log('esquerda, direita',esquerda, direita)
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--
        }
        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}


console.log(quickSort(listaLivros, 0, listaLivros.length - 1));

//primeira mente é escolhido um pivo este pivo sera comparado com todos os valores ate achar o seu lugar
//depois que achar seu nugar ele vai começar a ordenar do ponto dele pra esquerda ate ordenar tudo depois 
//sera escolhido outro pivo que por sua vez ira se comparar com todos os numeros que ainda nao estao 
//ordenados
