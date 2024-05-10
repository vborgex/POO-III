export default class Sauce{
    constructor(private _flavor: string){
    }
    
    public get flavor(): string {
        return this._flavor;
    }
    public set flavor(value: string) {
        this._flavor = value;
    }

}