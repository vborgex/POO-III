import Decorator from "./Decorator";

/**
 * Decorator para alterar o operation adicionando com açucar
 */
export default class AcucarDecorator extends Decorator {
    public operation(): string {
      return `${super.operation()} com açúcar`;
    }
}