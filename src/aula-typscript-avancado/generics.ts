//Função que recebe um Array do tipo genérico e inverte seus elementos
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

//Criando os objetos para realizar os testes
const numeros = [1, 2, 3, 4, 5];
const strings = ["TypeScript", "ao", "vindo", "bem", "Seja"];

//Imprimindo a resposta no terminal
console.log(inverterArray(numeros));
console.log(inverterArray(strings));

//Criando uma interface Genérica
interface Repositorio<T> {
    //Definição dos métodos necessários para o repositório
    salvar(dado: T): void;

    obterTodos(): T[];
}

//Criando uma outra interface para usuario
interface Usuario {
    nome: string;
    email: string;
}

//Criando uma classe que implemente um Repositorio de Usuarios
class UsuarioRepositorio implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Alice", email: "alice@fiap.com.br" });
repo.salvar({ nome: "Samara", email: "santos.samara@gmail.com.br" });

console.log("Usuários:", repo.obterTodos());