import CodigoRastreio from "../utils/CodigoRastreio";
import iTransportadora from "./interfaces/iTransportadora";

export default class Transportadora implements iTransportadora{
    code : CodigoRastreio;
    generateCode(): CodigoRastreio {
        return new CodigoRastreio()
    }
    send(): void {
        this.code = this.generateCode();
        console.log("Codigo de rastreio: "+this.code.code);
        console.log("Seu produto esta com a Transportadora");
    }
    receive(): void {
        console.log("Pedido em rota de entrega para seu endereco");
    }

}