import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import IConsole from "./consoles/interfaces/iConsole";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

function StartPlaying(console1: IConsole){
    console.log("Waiting...");
    const play1 = new Play(console1);
    play1.playing();
    play1.result();
}

function StartAdvancedPlaying(console1: IConsole){
    console.log("Waiting...");
    const play1 = new AdvancedPlay(console1);
    play1.playing();
    play1.result();
    play1.challenge();
}

StartPlaying(new XBox());
console.log();
StartAdvancedPlaying(new PlayStation())