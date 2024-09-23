// tipos primitivos
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
// arrays
const lista = [];
lista.push(444, 22, 1.88);
console.log(lista);
//enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3stio";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};
