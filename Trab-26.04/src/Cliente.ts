import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente{
    private _nome: string;
    private _cpf: string;
    private _data_nascimento: number;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefone: Telefone[];

    constructor (nome: string, cpf: string, data_nascimento: number, sexo: string, endereco: Endereco, telefone: Telefone[]){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.sexo = sexo;
        this.endereco = endereco;
        this.telefone = telefone;
    }


    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }

    public get data_nascimento(): number {
        return this._data_nascimento;
    }
    public set data_nascimento(value: number) {
        this._data_nascimento = value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get telefone(): Telefone[] {
        return this._telefone;
    }
    public set telefone(value: Telefone[]) {
        this._telefone = value;
    }

}