import IComponent from "./IComponent";

//Cafe component fornece implementação padrão da operation. Pode haver diversas variações dessa classe.
export default class CafeComponent implements IComponent{
    public operation(): string {
      return 'Café simples';
    }
  }