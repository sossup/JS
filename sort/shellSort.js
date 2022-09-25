const listaLivros = [{
    titulo: 'Go',
    preco: 45
},{
    titulo: 'C++',
    preco: 35
},{
    titulo: 'Java',
    preco: 30
},{
    titulo: 'PHP',
    preco: 15 
},{
    titulo: 'Elixir',
    preco: 50
},{
    titulo: 'Rust',
    preco: 22
},{
    titulo: 'Scala',
    preco: 40
},{
    titulo: 'Ruby',
    preco: 28
},{
    titulo: 'JavaScript',
    preco: 25
},{
    titulo: 'C#',
    preco: 33
},{
    titulo: 'Python',
    preco: 20
}]

function shellSort(arr) {
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i].preco;
			
			let j;
			for (j = i; j >= gap && arr[j-gap].preco > temp; j-=gap)  {
				arr[j].preco = arr[j-gap].preco;
			}

			arr[j].preco = temp;
		}
	}

	return arr;
}

console.log(shellSort(listaLivros))

//Shell sort é uma versão otimizada do Insertion sort, que basicamente permite a troca de itens 
//que estão distantes um do outro.

//[0] [1] [2] [3] [4] [5] [6] [7] [8] [9]
// ^                   ^
//passara comparando os indices ate que chegue :
//[0] [1] [2] [3] [4] [5] [6] [7] [8] [9]
//                 ^                   ^
//depois ira começar novamente pelos indices:
//[0] [1] [2] [3] [4] [5] [6] [7] [8] [9]
// ^           ^
//depois
//[0] [1] [2] [3] [4] [5] [6] [7] [8] [9]
// ^   ^