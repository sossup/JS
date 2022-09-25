for (let i = 0; i < 5; i++){
    console.log('ola')
}

//for sempre tera esta estrutura    uma variavel ; a condição ; e oque sera feito no final do loop




//-------------------------------------
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text)

//for..in..  tambem sempre tera esta estrutura            for percorre in person 
//                                                        e a variavel é usada para percorrer cada valor 
//                                                        esses valores sao salvos em text fora do 'for'
//pode ser que forEach se encaixe melhor que for in na maioria das vezes




//--------------------------------------
const cars = ["BMW", "Volvo", "Mini"];

let textes = "";
for (let x of cars) {
  textes += x;
}

console.log(textes)

//for..of                         for of passa por cada propriedade de cars interando em let 






//----------------------------------
//while

let num1 = 0
let num2 = 0

// while(num1 < 10){
//     num1++
//     num2 += num1;
// }
console.log(num1)

// 

do {
    num1++
    num2 += num1
}while(num1 < 10)

console.log(num1)

//do...while       é usado para garantir que o loop ira rodar pelo menos uma vez mesmo que a condição seja falsa