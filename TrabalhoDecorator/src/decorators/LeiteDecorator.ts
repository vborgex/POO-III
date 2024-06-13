import Decorator from "./Decorator";

/**
 * Os Decorators Concretos chamam o objeto wrapped e alteram seu resultado de alguma forma.
 */
export default class LeiteDecorator extends Decorator {
    public operation(): string {
      return `${super.operation()} com leite`;
    }
  }