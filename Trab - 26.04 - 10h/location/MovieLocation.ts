import IItem from "./itens/interface/IItem";
import Movie from "./itens/Movie";
import Location from "./Location";

export default class MovieLocation extends Location{
    protected createItem() :IItem{
        return new Movie();
    }
}
