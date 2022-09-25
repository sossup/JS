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

    //livros = arrProdutos         atual=posicaoInicial
function menorValor(arrProdutos,posicaoInicial){
        let maisBarato = posicaoInicial;
    
        for (let atual =posicaoInicial; atual<arrProdutos.length; atual++){
                if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
                        maisBarato = atual
                        console.log(Livros)
                }
        }
        return maisBarato;       
}

for (let atual = 0; atual<Livros.length; atual++){
        let menor = menorValor(Livros, atual)

        let livroAtual = Livros[atual];
        let livrosMenorPreco = Livros[menor];

        Livros[atual] = livrosMenorPreco
        Livros[menor] = livroAtual

        
}

console.log(Livros)

//ele fica percorrendo a lista em 'function menorvalor' quando termina ele passa pro for que altera o valor
//o for é responsavel por ficar chamando menorValor