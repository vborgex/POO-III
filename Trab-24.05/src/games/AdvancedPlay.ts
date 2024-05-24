import IConsole from "../consoles/interfaces/iConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console : IConsole){
        super(console);
    }
    challenge() : void{
        console.log("Starting a new challenge!");
    }
}