/**A classe base Decorator segue a mesma interface dos demais componentes.
 * O objetivo principal desta classe é definir a interface de empacotamento para todos
 * decoradores concretos. A implementação padrão do código de empacotamento pode
 * inclui um campo para armazenar um componente empacotado e os meios para inicializar
 * isto.
**/

import IComponent from "../components/IComponent";

export default class Decorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    //O Decorator delega todo o trabalho ao componente empacotado.
    public operation(): string {
        return this.component.operation();
    }
}
