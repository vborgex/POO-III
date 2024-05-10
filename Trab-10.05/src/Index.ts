import SandwichBuilder from "./builder/SandwichBuilder";
import Director from "./director/Director";
import Sandwich from "./recipes/Sandwich";

const builder : SandwichBuilder = new SandwichBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog : Sandwich = builder.getSandwich();
console.log("Aqui esta seu sanduba:")
console.log("\tUm "+hotdog.sandwichType+" de " +hotdog.protein+" no pao "+hotdog.bread);
console.log("Com as saladas: ")
hotdog.salads.forEach(element => {
    console.log("\t-"+element.vegetable);
});
console.log("E com os molhos: ")
hotdog.sauces.forEach(element => {
    console.log("\t-"+element.flavor);
});
