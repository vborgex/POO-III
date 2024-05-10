import iBuilder from "../builder/iBuilder";
import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";

export default class Director{
    constructor(private builder: iBuilder){

    }

    constructHotDog(){
        this.builder.setSandwichType(SandwichType.HOTDOG);
        this.builder.setBread(Bread.HOTDOG);
        this.builder.setProtein(Protein.VINA);
        this.builder.addSalad(new Salad("Alface"));
        this.builder.addSalad(new Salad("Tomate"));
        this.builder.addSalad(new Salad("Milho"));
        this.builder.addSauce(new Sauce("Barbecue"));
    }

    constructXSalada(){
        this.builder.setSandwichType(SandwichType.XSALADA);
        this.builder.setBread(Bread.AUSTRALIANO);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.addSalad(new Salad("Alface"));
        this.builder.addSalad(new Salad("Tomate"));
        this.builder.addSalad(new Salad("Cebola crispy"));
        this.builder.addSauce(new Sauce("Barbecue"));
    }
}