import IConsole from "../consoles/interfaces/iConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay{
    constructor(private console : IConsole){

    }
    playing(): void {
        console.log("Starting the game...");
    }
    result(): void {
        console.log("Playing!")
    }
    
}