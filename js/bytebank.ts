let saldoCorrente = 100;

const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldoCorrente.toString();
}


const transacaoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement; //informando que é um formulário HTML

transacaoFormulario .addEventListener("submit", function(event){
    event.preventDefault();
    if(!transacaoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = transacaoFormulario .querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = transacaoFormulario .querySelector("#valor") as HTMLInputElement; //pegando o input
    const inputData = transacaoFormulario .querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;  // pegando o valor do input
    let data: Date = new Date(inputData.value);


    if (tipoTransacao == "Depósito"){
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválida!');
        return;
    }

    elementSaldo.textContent = saldo.toString();

    //construindo objeto para representar a nova transação
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    transacaoFormulario .reset();
});
