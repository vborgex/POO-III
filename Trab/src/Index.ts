import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

const telefoneA : Telefone =  new Telefone ("42", "3624-0203", "residencial");
const telefoneB : Telefone =  new Telefone ("41", "8888-0203", "celular");
const telefones1 : Telefone[] = [telefoneA, telefoneB];

const endereco1 : Endereco = new Endereco ("Rua do Cachorro Sentado", 555, "Guarapuava", "Parana");

const cliente1 : Cliente = new Cliente("Claudia", "930.142.279-43", 180888, "Feminino", endereco1, telefones1);

const produtoA : Produto = new Produto(598465, "Pao australiano", 40.90);
const produtoB : Produto = new Produto(887445, "Pao frances", 16.0);
const produtos1 : Produto[] = [produtoA,produtoB];

const venda1 : Venda = new Venda(11, 120308, cliente1, produtos1);

console.log("Código:\t" + venda1.codigo + "\nData:\t"+ venda1.data + "\nCliente:")
console.log("\n\tNome:\t" + cliente1.nome+ "\n\tCPF: \t" + cliente1.cpf + "\n\tData: \t" + cliente1.data_nascimento+ "\n\tSexo:\t" + cliente1.sexo + "\n\tEndereco:");
console.log("\n\t\tRua:\t" + cliente1.endereco.rua + "\n\t\tNumero:\t" + cliente1.endereco.numero + "\n\t\tCidade:\t" + cliente1.endereco.cidade + "\n\t\tEstado:\t" + cliente1.endereco.estado)
console.log("\n\tTelefones:" + "\n\t\t")
cliente1.telefone.forEach(function(telefone){
    console.log("\t\t" + telefone.ddd+ " " + telefone.numero + " (" + telefone.tipo + ")")
})
console.log("\n\tProdutos:")
venda1.produto.forEach(function(produto){
    console.log("\n\t\tCodigo:\t" + produto.codigo)
    console.log("\t\tDesc.:\t" + produto.descricao)
    console.log("\t\tValor:\tR$ " + produto.valor +"\n")
})
