import IFoods from "./interfaces/IFoods";


export default class Hamburguer implements IFoods{
    prepareIngredients(): void {
        console.log("Hamburguer: Ingredientes prontos!");
    }
    makeFood(): void {
        console.log("Hamburguer: Seu hamburguer saiu da chapa!");
    }
    startDelivery(): void {
        this.prepareIngredients();
        this.makeFood();
        console.log("Hamburguer: Seu hamburguer saiu para a entrega!");
    }
    
    
}