// sort sempre vai organizar pela tabela UNICODE

let numeros = [1,23,5,7,9,4,24,6,70];

numeros.sort();

numeros.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0
});
                                         //b-a para que fique decresente
//arrow function :   numeros.sort((a,b) => a-b)

console.log(numeros);

//-------------------------------

let string = ['ola','aviao','carro','casa'];

string.sort();

//decresente
string.sort(function(a,b){
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});


console.log(string);

//------------------

let stringCase = ['Aviao','gaivota','violao','mar','Zebra'];

stringCase.sort();

stringCase.sort(function(a,b){
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1

})
console.log(stringCase);

//---------------------

let stringASCII = ['éai','aviao','zebra','íoio'];

stringASCII.sort();

stringASCII.sort(function(a,b){
    return a.localeCompare(b);
});

console.log(stringASCII);

//----------------------
//Otimizar a carga com variavel "TMP"

let rivers = ['Nile','Amazon','Congo','Mississippi','Rio-Grande'];

rivers.sort(function(a,b){
    console.log(a,b);
    return a.length - b.length
});

var length = rivers.map(function(e,i){
    return {index: i, value: e.length};
});

length.sort(function(a,b){
    return +(a.value > b.value) || +(a.value === b.value)-1;
})

var sortedRivers = length.map(function(e){
    return rivers[e.index];
})

console.log(sortedRivers)

console.log(length)

//--------------------------------

// o array a ser ordenado
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando o array mapeado contendo os dados resumidos
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container para o resultado ordenado
var result = mapped.map(function(el){
  return list[el.index];
});


console.log(result)