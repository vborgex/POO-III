import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";
import Sandwich from "../recipes/Sandwich";
import iBuilder from "./iBuilder";

export default class SandwichBuilder implements iBuilder{
    private sandwich = new Sandwich();
    reset(): void {
        this.sandwich = new Sandwich();
    }
    getSandwich(): Sandwich {
        const ready : Sandwich = this.sandwich;
        this.reset();
        return ready;
    }
    setSandwichType(type: SandwichType) {
        this.sandwich.sandwichType = type;
    }
    setBread(bread: Bread) {
        this.sandwich.bread = bread;
    }
    setProtein(protein: Protein): void {
        this.sandwich.protein=protein;
    }
    addSalad(salad: Salad): void {
        this.sandwich.addSalad(salad);
    }
    addSauce(sauce: Sauce): void {
        this.sandwich.addSauce(sauce);
    }
    
}