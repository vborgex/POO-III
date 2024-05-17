import iCorreios from "../correios/interfaces/iCorreios";
import CodigoRastreio from "../utils/CodigoRastreio";

export default class TransportadoraAdapter implements iCorreios{
    constructor(private Transportadora){

    }
    generateCode(): CodigoRastreio {
        return new CodigoRastreio();
    }
    sendCorreios(): void {
        this.Transportadora.send();
    }
    receiveCorreios(): void {
        this.Transportadora.receive();
    }
    
}