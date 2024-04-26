import IItem from "./interface/IItem";


export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Starting the movie!")
    }
    getDescription(): void {
        console.log("Movie: Prepare yourself to be petrified with this horror movie!")
    }
}