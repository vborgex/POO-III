import CodigoRastreio from "../../utils/CodigoRastreio";

export default interface iCorreios{
    generateCode(): CodigoRastreio;
    sendCorreios() : void;
    receiveCorreios() : void;
}