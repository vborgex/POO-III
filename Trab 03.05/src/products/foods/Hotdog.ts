import IFoods from "./interfaces/IFoods";


export default class Hotdog implements IFoods{
    prepareIngredients(): void {
        console.log("Hot Dog: Ingredientes prontos!");
    }
    makeFood(): void {
        console.log("Hot Dog: Seu hot dog saiu da chapa!");
    }
    startDelivery(): void {
        this.prepareIngredients();
        this.makeFood();
        console.log("Hot Dog: Seu hot dog saiu para a entrega!");
    }
    
    
}