const listaLivros = [{
    titulo: 'PHP',
    preco: 15  
},{
    titulo: 'Python',
    preco: 20
},{
    titulo: 'Rust',
    preco: 22
},{
    titulo: 'JavaScript',
    preco: 25
},{
    titulo: 'Ruby',
    preco: 28
},{
    titulo: 'Java',
    preco: 30
},{
    titulo: 'C#',
    preco: 33
},{
    titulo: 'C++',
    preco: 35
},{
    titulo: 'Scala',
    preco: 40
},{
    titulo: 'Go',
    preco: 45
},{
    titulo: 'Elixir',
    preco: 50
}]

function busca(array, de, ate, valorBuscado){
          //pega o valor que esta na metade do array
    const meio = Math.floor((de + ate) /2);
    const atual = array[meio];
    console.log(atual)
       
    if(de > ate){
        return -1;
    }
    //valor buscado esta no meio ?
    if(valorBuscado === atual.preco){
        return meio;
    }
    //valor buscado é menor que o preço atual ?
    // entao volta e divide pegando o valor do meio novamente retirando os valores maior que o preço atual
    if(valorBuscado < atual.preco){
        return busca(array, de, meio -1, valorBuscado);
    }
    //valor buscado é maio que o preço atual ?
    // entao volta e divide pengado o valor do meio novamente retirando os valores menor que o preço atual
    if(valorBuscado > atual.preco){
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 23))