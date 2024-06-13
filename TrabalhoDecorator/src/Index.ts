import IComponent from "./components/IComponent";
import CafeComponent from "./components/CafeComponent";
import AcucarDecorator from "./decorators/AcucarDecorator";
import LeiteDecorator from "./decorators/LeiteDecorator";

// Cliente
function clienteCode(cafe: IComponent) {
    console.log(cafe.operation());
 }
  
  // Criar um café simples
  const cafeSimples = new CafeComponent();
  console.log('Cliente: Eu quero um café simples:');
  clienteCode(cafeSimples);
  console.log('');
  
  // Criar um café com leite e açúcar
  const cafeComLeiteEAçucar = new AcucarDecorator(new LeiteDecorator(new CafeComponent()));
  console.log('Cliente: Eu quero um café com leite e açúcar:');
  clienteCode(cafeComLeiteEAçucar);
  console.log('');