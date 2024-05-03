import IDeliveryFactory from "../deliveryFactories/interfaces/IDeliveryFactory";
import IDrinks from "../products/drinks/interfaces/IDrinks";
import IFoods from "../products/foods/interfaces/IFoods";

export default class Client{
    private drink : IDrinks;
    private food : IFoods;
    
    constructor(delivery: IDeliveryFactory){
        this.food = delivery.createDeliveryFood();
        this.drink = delivery.createDeliveryDrink();
    }

    startDelivery(){
        this.drink.startDelivery();
        this.food.startDelivery();
    }
    
}