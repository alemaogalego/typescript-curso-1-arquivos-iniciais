var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data_1, _quantidade_1, _valor_1;
// não pode ser modificada depois de criada
// Obrigatoriamente tem uma data, quantidade e valor.
// seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.
export class Negociacao {
    constructor(data, quantidade, valor) {
        _data_1.set(this, void 0);
        _quantidade_1.set(this, void 0);
        _valor_1.set(this, void 0);
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return __classPrivateFieldGet(this, _data_1);
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _quantidade_1);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor_1);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantidade_1) * __classPrivateFieldGet(this, _valor_1);
    }
}
_data_1 = new WeakMap(), _quantidade_1 = new WeakMap(), _valor_1 = new WeakMap();
