import IDrinks from "./interfaces/IDrinks";

export default class Beer implements IDrinks{
    prepareIngredients(): void {
        console.log("Beer: Cerveja ja estava pronta, so falta embalar!");
    }
    makeDrink(): void {
        console.log("Beer: Sua cerveja esta pronta para a entrega");
    }
    startDelivery(): void {
        this.prepareIngredients();
        this.makeDrink();
        console.log("Beer: Sua cerveja esta sendo entregue por nosso delivery!");
    }
    
}