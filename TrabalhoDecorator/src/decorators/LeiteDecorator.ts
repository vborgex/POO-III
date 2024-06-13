import Decorator from "./Decorator";

/**
 * Decorator para alterar o operation adicionando com leite
 */
export default class LeiteDecorator extends Decorator {
    public operation(): string {
      return `${super.operation()} com leite`;
    }
  }