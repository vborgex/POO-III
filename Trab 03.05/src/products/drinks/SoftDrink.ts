import IDrinks from "./interfaces/IDrinks";

export default class SoftDrink implements IDrinks{
    prepareIngredients(): void {
        console.log("Soft drink: Ingredientes prontos!");
    }
    makeDrink(): void {
        console.log("Soft drink: Está pronto para a entrega!");
    }
    startDelivery(): void {
        this.prepareIngredients();
        this.makeDrink();
        console.log("Soft drink: Está sendo entregue para sua casa!");
    }
    
}