import IConsole from "./interfaces/iConsole";

export default class XBox implements IConsole{
    constructor(){
        this.configuration();
        console.log("Starting XBox...");
    }
    configuration(): void {
        console.log("XBox: Settings...");
    }
    authToken(): void {
        console.log("XBox: Application authorized...");
    }
    
}