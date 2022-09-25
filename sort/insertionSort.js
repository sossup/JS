const Livros = [{
    titulo: "JS",
    preco: 25
},{
    titulo: "PHP",
    preco: 15
},{
    titulo: "JAVA",
    preco: 30
},{
    titulo: "ELIXIR",
    preco: 50
},{
    titulo: "Go",
    preco: 45
},{
    titulo: "python",
    preco: 20
}];

function insertionSort(lista){

    //analise = atual
    //while    analise = 0 ?  preço da posiçao atual é menor que o preço da posiçao anterior ?      
    // sempre que o while é executado diminui o analise para que compare o item anterior com o atual 
    //analise = 2 | analise - 1 = 1
    //guarda valor atual em analise           e o valor anterior em anterior
    //item anterior fica na posiçao atual e o posiçao atual fica em anterior 

    for (let atual = 0; atual < lista.length; atual++){
            let analise = atual;
            while(analise > 0 && lista[analise].preco<lista[analise - 1].preco){
                    let itemAnalise = Livros[analise];
                    let itemAnterior = Livros[analise - 1];

                    Livros[analise] = itemAnterior
                    Livros[analise - 1] = itemAnalise

                    analise--
            }
    }
    console.log(lista);
}

insertionSort(Livros)

//sempre compara o valor atual com o anterior 