
import fs  from "fs";
import chalk from "chalk";

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'caminho invalido'))
}

export async function pegaArquivo(caminho){
    try{
        const encoding = 'UTF-8'
        const texto = await fs.promises.readFile(caminho, encoding)
        return extraiLinks(texto);
    }catch(erro){
        trataErro(erro)
    }
}

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({
        [captura[1]]: captura[2]
    }))
    return resultados.length !== 0 ? resultados : 'nao ha links';
}

//fs.readFile busca o arquivo (caminho, precisa definir a linguagem, (caso de erro,caso nao de erro))


//-----------------------
//nao assincrono

// function pegaArquivo(caminho){
//     const encoding = 'UTF-8'
//     fs.readFile(caminho, encoding, (erro,texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//             console.log(chalk.green(texto));
//     })
// }


//---------------------------------
//assincrono   promises...then

// function pegaArquivo(caminho){
//     const encoding = 'UTF-8'
//     fs.promises
//         .readFile(caminho, encoding)
//             .then((texto) => console.log(chalk.green(texto)))
//                 .catch(trataErro) 
// }

//then esta esperando a promesa de fs de trazer um arquivo