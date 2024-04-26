import IItem from "./interface/IItem";


export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Starting the game!")
    }
    getDescription(): void {
        console.log("Game: Prepare yourself to pissing your pants with this horror game!")
    }
}