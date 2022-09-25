const cliente = {
    nome:"andre",
    idade:26,
    cpf:"1244647",
    email:"davi@gmail",
    fones:['4143567','124346457']
}

cliente.dependete = {
    nome: 'sara',
    idade: 25
}

console.log(cliente)

cliente.dependete.nome = 'davi'

console.log(cliente)
