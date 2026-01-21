// não pode ser modificada depois de criada
// Obrigatoriamente tem uma data, quantidade e valor.
// seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;
    
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    } 
    get volume() {
        return this._quantidade * this._valor;
    }  
}