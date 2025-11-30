import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const perguntar = (pergunta: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
};

interface Produto {
    codigo: number;
    descricao: string;
    estoque: number;
}

const estoque: Produto[] = [
    { codigo: 101, descricao: "Caneta Azul", estoque: 150 },
    { codigo: 102, descricao: "Caderno Universitário", estoque: 75 },
    { codigo: 103, descricao: "Borracha Branca", estoque: 200 },
    { codigo: 104, descricao: "Lápis Preto HB", estoque: 320 },
    { codigo: 105, descricao: "Marcador de Texto Amarelo", estoque: 90 }
];


function exibirEstoque() {
    console.clear(); 
    console.log("\n=== ESTOQUE ATUAL ===");
    console.table(estoque); 
    console.log("=====================\n");
}

async function realizarMovimentacao(tipo: "entrada" | "saida") {
    console.log(`\n--- NOVA ${tipo.toUpperCase()} ---`);
    
    const codigoInput = await perguntar("Digite o código do produto: ");
    const codigo = parseInt(codigoInput);
    const produto = estoque.find(p => p.codigo === codigo);

    if (!produto) {
        console.log("Erro: Produto não encontrado!");
        return;
    }

    const qtdInput = await perguntar(`Digite a quantidade para ${tipo}: `);
    const quantidade = parseInt(qtdInput);

    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Erro: Quantidade inválida.");
        return;
    }

    if (tipo === "entrada") {
        produto.estoque += quantidade;
        console.log(`Sucesso! Entraram ${quantidade} unidades de ${produto.descricao} no seu estoque.`);
        console.log(`Estoque Atual: ${produto.estoque}`);
    } else {
        if (produto.estoque >= quantidade) {
            produto.estoque -= quantidade;
            console.log(`Sucesso! Saíram ${quantidade} unidades de ${produto.descricao} do seu estoque.`);
            console.log(`Estoque atual: ${produto.estoque}`);
        } else {
            console.log(`Erro: Estoque insuficiente! (Disponível: ${produto.estoque})`);
        }
    }
}

async function main() {
    while (true) {
        console.log("\n--- SISTEMA DE ESTOQUE ---");
        console.log("1. Ver Estoque");
        console.log("2. Registrar ENTRADA (+)");
        console.log("3. Registrar SAÍDA (-)");
        console.log("0. Sair");

        const opcao = await perguntar("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                exibirEstoque();
                break;
            case "2":
                await realizarMovimentacao("entrada");
                break;
            case "3":
                await realizarMovimentacao("saida");
                break;
            case "0":
                console.log("Saindo do sistema...");
                rl.close();
                return;
            default:
                console.log("Opção inválida!");
                break;
        }
        
        if (opcao !== "0") await perguntar("Pressione ENTER para continuar...");
    }
}

main();