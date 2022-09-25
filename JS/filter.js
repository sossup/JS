const anos = [32, 33, 16, 40];
const result = anos.filter(checkAdult);

function checkAdult(anos) {
  return anos >= 18;
}

console.log(result)

//o filtro checa na funcao checkAdult se for true ele coloca o valor dentro da const result
//filter sera chamado depois de uma array ou uma array sera declarada como parametro
//filter precisa de uma function alem de uma array