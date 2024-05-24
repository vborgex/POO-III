import IConsole from "./interfaces/iConsole";


export default class PlayStation implements IConsole{
    constructor(){
        this.configuration();
        console.log("Starting PlayStation...");
    }
    configuration(): void {
        console.log("PlayStation: Settings...");
    }
    authToken(): void {
        console.log("PlayStation: Application authorized...");
    }
    
}