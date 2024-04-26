import MovieLocation from "./location/MovieLocation";
import Location from "./location/Location";
import GameLocation from "./location/GameLocation";

declare var process;
let location: Location;
if(process.argv.includes("movie")){
    location = new MovieLocation();
}
else if(process.argv.includes("game")){
    location = new GameLocation();
}
else{
    console.log("Please select the kind of location!")
}

if(location) location.startItem();

