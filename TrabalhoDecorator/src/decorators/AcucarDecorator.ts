import Decorator from "./Decorator";

/**
 * Decorators podem executar seu comportamento antes ou depois da chamada de um objeto encapsulado.
 */
export default class AcucarDecorator extends Decorator {
    public operation(): string {
      return `${super.operation()} com açúcar`;
    }
}