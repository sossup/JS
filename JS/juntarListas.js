const editoraFolha = [{
    titulo: "PHP",
    preco: 15
},{
    titulo: "JavaScript",
    preco: 25
},{
    titulo: "Java",
    preco: 30
},{
    titulo: "Go",
    preco: 45
},{
    titulo: "Elixir",
    preco: 50
}]      

const editoraGalho = [{
    titulo: "Python",
    preco: 20
},{
    titulo: "Rust",
    preco: 22
},{
    titulo: "Ruby",
    preco: 28
},{
    titulo: "C#",
    preco: 33
},{
    titulo: "C++",
    preco: 35
},{
    titulo: "Scala",
    preco: 40
}]  

function juntaLista(lista1,lista2){
    let listaFinal = [];
    
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
            let produtoAtualLista1 = lista1[posicaoAtualLista1];
            let produtoAtualLista2 = lista2[posicaoAtualLista2];

            if(produtoAtualLista1.preco < produtoAtualLista2.preco){
                    listaFinal[atual] = produtoAtualLista1;
                    posicaoAtualLista1++;
            }else{
                    listaFinal[atual] = produtoAtualLista2;
                    posicaoAtualLista2++;
            }
            atual++;
    }

    while(posicaoAtualLista1 < lista1.length){
            listaFinal[atual] = lista1[posicaoAtualLista1];
            posicaoAtualLista1++;
            atual++;
    }

    while(posicaoAtualLista2 < lista2.length){
            listaFinal[atual] = lista2[posicaoAtualLista2];
            posicaoAtualLista2++;
            atual++;
    }

    return listaFinal;
}


console.log(juntaLista(editoraGalho,editoraFolha))