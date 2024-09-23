// tipos primitivos

let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// arrays
const lista: number[] = [];
lista.push(444, 22, 1.88);
console.log(lista)

//tipos personalizados (type alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

//enum
enum TipoTransacao{
    DEPOSITO = "Depóstio",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}