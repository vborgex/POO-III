export default class Salad{
    constructor(private _vegetable: string){
    }

    public get vegetable(): string {
        return this._vegetable;
    }
    public set vegetable(value: string) {
        this._vegetable = value;
    }
}