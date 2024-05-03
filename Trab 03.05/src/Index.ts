
import Client from "./client/Client";
import AiqFomeDelivery from "./deliveryFactories/AiqFomeDelivery";
import Delivery from "./deliveryFactories/Delivery";
import IFoodDelivery from "./deliveryFactories/IFoodDelivery";
import IDeliveryFactory from "./deliveryFactories/interfaces/IDeliveryFactory";

const currentDelivery = Delivery.IFOOD;
let delivery : IDeliveryFactory;

switch(currentDelivery){
    case Delivery.AIQFOME:
        delivery = new AiqFomeDelivery;
        break;
    case Delivery.IFOOD:
        delivery = new IFoodDelivery;
        break;
    default:
        console.log("Delivery nao definido");
}

const client = new Client(delivery);
client.startDelivery();