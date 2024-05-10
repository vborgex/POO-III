import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";

export default class Sandwich{
    private _sandwichType: SandwichType;
    private _salads: Salad[] = [];
    private _protein: Protein;
    private _bread: Bread;
    private _sauces: Sauce[] = [];


    public get sandwichType(): SandwichType {
        return this._sandwichType;
    }
    public set sandwichType(value: SandwichType) {
        this._sandwichType = value;
    }

    public get salads(): Salad[] {
        return this._salads;
    }
    public set salads(value: Salad[]) {
        this._salads = value;
    }

    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }

    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }

    public get sauces(): Sauce[] {
        return this._sauces;
    }
    public set sauces(value: Sauce[]) {
        this._sauces = value;
    }

    public addSalad(salad: Salad){
        this.salads.push(salad);
    }

    public addSauce(sauce: Sauce){
        this.sauces.push(sauce);
    }
} 