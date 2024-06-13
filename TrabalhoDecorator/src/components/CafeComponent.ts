import IComponent from "./IComponent";

//Cafe component fornece implementação padrão da operation. Pode haver diversas variações dessa classe.
export default class CafeComponent {
    public operation(): string {
      return 'Café simples';
    }
  }