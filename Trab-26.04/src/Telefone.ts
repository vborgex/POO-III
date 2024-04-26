export default class Telefone{
    private _ddd: string;
    private _numero: string;
    private _tipo: string;

    constructor (ddd: string, numero: string , tipo: string){
        this.ddd = ddd;
        this.numero = numero;
        this.tipo = tipo;
    }

    public get ddd(): string {
        return this._ddd;
    }
    public set ddd(value: string) {
        this._ddd = value;
    }

    public get numero(): string {
        return this._numero;
    }
    public set numero(value: string) {
        this._numero = value;
    }

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

}