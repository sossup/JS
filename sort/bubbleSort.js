const Numeros = [25, 15, 30, 50, 45, 20]

function sortItems(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

console.log(sortItems(Numeros))

//o bubblu sort passa comparando o atual com o proximo ate que chegue totalmente nos dois indices da direita
//apos chegar na direita ele faz a volta comparando novamente ate que chegue totalmente na esquerda 