import Cliente from "./Cliente";
import Telefone from "./Telefone";
import Produto from "./Produto";

export default class Venda{
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produto: Produto[];
     
    constructor (codigo: number, data: number, cliente: Cliente, produto: Produto[]){
        this.codigo = codigo;
        this.data = data;
        this.cliente = cliente;
        this.produto = produto;
    }
    /**
     * calcularTotal
     */
    public  calcularTotal() {
        var soma : number = 0;
        this.produto.forEach(function(produto){
            soma += this.produto.valor;
        })  
        return soma;
    }

    public  imprimirProdutos() {
        this.produto.forEach(function(produto){
            console.log("Código:\t " + produto.codigo + "Descrição" + telefone.numero + "(" + telefone.tipo + ")\n\t\t")
        })  
    }

 
    public get codigo(): number {
        return this._codigo;
    }
    public set codigo(value: number) {
        this._codigo = value;
    }
    
    public get data(): number {
        return this._data;
    }
    public set data(value: number) {
        this._data = value;
    }
    
    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }
    
    public get produto(): Produto[] {
        return this._produto;
    }
    public set produto(value: Produto[]) {
        this._produto = value;
    }

    
}