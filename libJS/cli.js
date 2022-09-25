import chalk from "chalk";
import fs from "fs";
import { pegaArquivo } from "./index.js";

const caminho = process.argv;

async function processaTexto(argumentos){
    const caminho = argumentos[2];

    if(fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links'), resultados);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
    }
}

processaTexto(caminho);


//node .\cli.js .\texto.md