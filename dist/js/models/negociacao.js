// não pode ser modificada depois de criada
// Obrigatoriamente tem uma data, quantidade e valor.
// seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.
export class Negociacao {
    #data;
    #quantidade;
    #valor;
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
}