import SoftDrink from "../products/drinks/SoftDrink";
import IDrinks from "../products/drinks/interfaces/IDrinks";
import Hotdog from "../products/foods/Hotdog";
import IFoods from "../products/foods/interfaces/IFoods";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFoods {
        return new Hotdog();
    }
    createDeliveryDrink(): IDrinks {
        return new SoftDrink();
    }

}