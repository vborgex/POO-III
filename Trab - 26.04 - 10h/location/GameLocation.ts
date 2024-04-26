import Game from "./itens/Game";
import IItem from "./itens/interface/IItem";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem() :IItem{
        return new Game();
    }
}
