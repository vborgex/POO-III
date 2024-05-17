import CodigoRastreio from "../../utils/CodigoRastreio";

export default interface iTransportadora{
    generateCode(): CodigoRastreio;
    send() : void;
    receive() : void;
}