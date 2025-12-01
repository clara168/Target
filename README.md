# Desafios Técnicos - Estágio em Desenvolvimento

Este repositório contém as soluções desenvolvidas para os desafios técnicos propostos. O foco principal foi a utilização de **TypeScript** para garantir tipagem estática e segurança no código, além de explorar diferentes abordagens de interface (CLI e Web).

## Estrutura do Projeto

O projeto foi organizado em três módulos independentes:

### 1. Cálculo de Comissões de Vendas (`Desafio_1`)
Lógica de backend para processamento de uma lista de vendas.
- **Funcionalidade:** Lê um array de vendas, aplica regras de comissão baseadas em faixas de valores e gera um relatório consolidado por vendedor.
- **Destaque:** Uso de `Interfaces` e tratamento seguro de dados.

### 2. Gestão de Estoque Interativa (`Desafio_2`)
Sistema de controle de estoque via terminal.
- **Funcionalidade:** Permite registrar entradas e saídas de produtos, validando a disponibilidade do estoque.
- **Destaque:** Interface CLI (Command Line Interface) com **Menu Interativo** usando `readline` e `async/await`.

### 3. Calculadora de Juros e Multas (`Desafio_3`)
Aplicação Fullstack (Lógica + Interface) para cálculos financeiros.
- **Funcionalidade:** Calcula o valor atualizado de boletos vencidos com juros diários.
- **Destaque:** Interface Web (HTML/CSS) com validação de input (bloqueio de notação científica) e feedback visual dinâmico.

---

## Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado.
Instale as dependências do projeto:

``` bash
npm install 
```
### Desafio 1
``` bash
npx ts-node Desafio_1/index.ts 
```
### Desafio 2
``` bash
npx ts-node Desafio_2/index.ts
```
### Desafio 3
Compile o TypeScript e abra o HTML:
``` bash
npx tsc Desafio_3/script.ts
```
Windows: 
``` bash 
start Desafio_3/index.html
```  
Mac: 
``` bash
open Desafio_3/index.html 
```
Linux: 
``` bash
xdg-open Desafio_3/index.html
```

# Tecnologias Utilizadas
**Linguagem:** TypeScript
**Runtime:** Node.js (via ts-node)
**Web:** HTML5 & CSS3
**Versionamento:** Git & GitHub