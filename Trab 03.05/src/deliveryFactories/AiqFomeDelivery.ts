import Beer from "../products/drinks/Beer";
import IDrinks from "../products/drinks/interfaces/IDrinks";
import Hamburguer from "../products/foods/Hamburguer";
import IFoods from "../products/foods/interfaces/IFoods";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFoods {
        return new Hamburguer();
    }
    createDeliveryDrink(): IDrinks {
        return new Beer();
    }

}