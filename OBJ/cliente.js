const cliente = {
    nome:"andre",
    idade:26,
    cpf:"1244647",
    email:"davi@gmail",
    fones:['4143567','124346457'],
    dependete: [{
            nome: 'sara',
            idade: 25
    }],
    saldo: 1000,
    depositar:function(valor){
            this.saldo += valor
    }
}

cliente.depositar(30)
console.log(cliente.saldo)

const cliente2 = Object.create(cliente)  //para que nao crie uma referencia e sim um novo objeto