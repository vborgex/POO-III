import CodigoRastreio from "../utils/CodigoRastreio";
import Code from "../utils/CodigoRastreio";
import iCorreios from "./interfaces/iCorreios";

export default class Correios implements iCorreios{
    code : CodigoRastreio;
    generateCode(): CodigoRastreio {
        return new CodigoRastreio()
    }
    sendCorreios(): void {
        this.code = this.generateCode();
        console.log("Codigo de rastreio: "+this.code.code);
        console.log("Seu pedido chegou ao centro logistico dos Correios")
    }
    receiveCorreios(): void {
        console.log("Seu pedido saiu para a entrega")
    }

}