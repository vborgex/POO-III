import IDrinks from "../../products/drinks/interfaces/IDrinks";
import IFoods from "../../products/foods/interfaces/IFoods";

export default interface ITransportFactory{
    createDeliveryFood() : IFoods;
    createDeliveryDrink(): IDrinks;
}