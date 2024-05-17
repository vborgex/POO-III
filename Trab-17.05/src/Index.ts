import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Correios from "./correios/Correios";
import iCorreios from "./correios/interfaces/iCorreios";
import Transportadora from "./transportadora/Transportadora";
import iTransportadora from "./transportadora/interfaces/iTransportadora";

console.log();
const pedido : iCorreios = new Correios();
pedido.sendCorreios();
pedido.receiveCorreios();

console.log();
const pedido2: iCorreios = new TransportadoraAdapter(new Transportadora);
pedido2.sendCorreios();
pedido2.receiveCorreios();