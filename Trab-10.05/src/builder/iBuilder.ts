import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";
import Sandwich from "../recipes/Sandwich";

export default interface iBuilder{
    reset() : void;
    getSandwich() : Sandwich;
    setSandwichType(type : SandwichType);
    setBread(bread : Bread);
    setProtein(protein : Protein) : void;
    addSalad(salad : Salad) : void;
    addSauce(sauce : Sauce) : void;
}