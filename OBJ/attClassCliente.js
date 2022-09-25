class Cliente{
    constructor(nome,email,cpf,saldo){
            this.nome = nome
            this.email = email
            this.cpf = cpf
            this.saldo = saldo 
    }

    depositar(valor){
            this.saldo += valor
    }

    exibirSaldo(){
            console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
            super(nome,email,cpf,saldo)
            this.saldoPoupanca =saldoPoupanca
    }

    depositarPoup(valor){
            this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca('andre','a@gmail','3525255',100,200)

andre.depositar(50)
andre.depositarPoup(50)
console.log(andre)