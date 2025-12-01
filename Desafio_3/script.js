var inputValor = document.getElementById('valor');
var inputData = document.getElementById('dataVencimento');
var btnCalcular = document.getElementById('btnCalcular');
var divResultado = document.getElementById('resultado');
function calcularJuros() {
    var valorOriginal = parseFloat(inputValor.value);
    var dataVencimentoStr = inputData.value;
    if (isNaN(valorOriginal) || !dataVencimentoStr) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    var dataVencimento = new Date(dataVencimentoStr + "T00:00:00");
    var dataHoje = new Date();
    dataVencimento.setHours(0, 0, 0, 0);
    dataHoje.setHours(0, 0, 0, 0);
    var umDiaMs = 1000 * 60 * 60 * 24;
    var diferencaMs = dataHoje.getTime() - dataVencimento.getTime();
    var diasAtraso = Math.floor(diferencaMs / umDiaMs);
    divResultado.style.display = "block";
    if (diasAtraso > 0) {
        var taxa = 0.025;
        var juros = valorOriginal * taxa * diasAtraso;
        var total = valorOriginal + juros;
        divResultado.className = "atrasado";
        divResultado.innerHTML = "\n            <strong>\u26A0\uFE0F Boleto Vencido!</strong><br>\n            Dias de atraso: ".concat(diasAtraso, "<br>\n            Juros (2.5% ao dia): R$ ").concat(juros.toFixed(2), "<br>\n            <hr>\n            <strong>Total a Pagar: R$ ").concat(total.toFixed(2), "</strong>\n        ");
    }
    else {
        divResultado.className = "em-dia";
        divResultado.innerHTML = "\n            <strong>Boleto em dia!</strong><br>\n            Nenhum juro ser\u00E1 cobrado.<br>\n            <hr>\n            <strong>Total a Pagar: R$ ".concat(valorOriginal.toFixed(2), "</strong>\n        ");
    }
}
inputValor.addEventListener('keydown', function (event) {
    var teclasProibidas = ["e", "E", "+", "-"];
    if (teclasProibidas.includes(event.key)) {
        event.preventDefault();
    }
});
btnCalcular.addEventListener('click', calcularJuros);
