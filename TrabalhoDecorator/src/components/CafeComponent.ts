import IComponent from "./IComponent";

//Componentes concretos fornecem implementações padrão das operações. podem haver diversas variações dessas classes.
export default class CafeComponent {
    public operation(): string {
      return 'Café simples';
    }
  }