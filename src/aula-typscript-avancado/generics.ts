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