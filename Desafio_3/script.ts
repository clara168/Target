const inputValor = document.getElementById('valor') as HTMLInputElement;
const inputData = document.getElementById('dataVencimento') as HTMLInputElement;
const btnCalcular = document.getElementById('btnCalcular') as HTMLButtonElement;
const divResultado = document.getElementById('resultado') as HTMLDivElement;

function calcularJuros() {
    
    const valorOriginal = parseFloat(inputValor.value);
    const dataVencimentoStr = inputData.value; 

    if (isNaN(valorOriginal) || !dataVencimentoStr) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const dataVencimento = new Date(dataVencimentoStr + "T00:00:00");
    const dataHoje = new Date();
    
    dataVencimento.setHours(0,0,0,0);
    dataHoje.setHours(0,0,0,0);

    const umDiaMs = 1000 * 60 * 60 * 24;
    const diferencaMs = dataHoje.getTime() - dataVencimento.getTime();
    const diasAtraso = Math.floor(diferencaMs / umDiaMs);

    divResultado.style.display = "block"; 

    if (diasAtraso > 0) {
        const taxa = 0.025;
        const juros = valorOriginal * taxa * diasAtraso;
        const total = valorOriginal + juros;

        divResultado.className = "atrasado"; 
        divResultado.innerHTML = `
            <strong>Boleto Vencido!</strong><br>
            Dias de atraso: ${diasAtraso}<br>
            Juros (2.5% ao dia): R$ ${juros.toFixed(2)}<br>
            <hr>
            <strong>Total a Pagar: R$ ${total.toFixed(2)}</strong>
        `;
    } else {
        divResultado.className = "em-dia"; 
        divResultado.innerHTML = `
            <strong>Boleto em dia!</strong><br>
            Nenhum juro será cobrado.<br>
            <hr>
            <strong>Total a Pagar: R$ ${valorOriginal.toFixed(2)}</strong>
        `;
    }
}

inputValor.addEventListener('keydown', (event) => {
    const teclasProibidas = ["e", "E", "+", "-"];
    
    if (teclasProibidas.includes(event.key)) {
        event.preventDefault();
    }
});

btnCalcular.addEventListener('click', calcularJuros);