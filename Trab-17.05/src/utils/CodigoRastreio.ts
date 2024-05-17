export default class Code{
    private _code: string;

    constructor(){
        this._code = "BR" 
        this._code+= Math.floor(Math.random()*100000000)+10000000;
    }
    
    public get code(): string {
        return this._code;
    }

}