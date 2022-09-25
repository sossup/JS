//regex101

//texto.match(regex)    match é usado por texto entao nao é um comando regex     regex.exec  como tem regex antes entao é um comando usado por regex

// escrever a string, pocura todas as strings que pesquisou
// [abc], pega todas as letras a,b ou c
// [^abc] tudo diferente de abc
//a-z          de a ate z   ou A-z           todas maiusculas e minusculas de a ate z
// \[\]     escapa o []
// \w tudo que nao for caractere especial
//     *  todas 
// \s tudos os espaço
//  \[[^\]]*\]  tudo que estiver entre [] 
//  \(https?:\/\/[^$#\s].[^\s]*\)     pegar um link
// ? tode acontecer ou nao

//     let regex = new RegExp("[a-zA-z\s]");
//     const regex = /[a-zA-z\s]/;
//     colocar entre () tudo que voce quer pegar deixando de pegar algum dado para melhor visualização
//     . seria o coringa