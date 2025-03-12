//Multiplicação
interface Multiplicação{
    (a: number, b: number): number;
}

const multiplicar: Multiplicação = (a: number, b: number) => a * b;
console.log(multiplicar(10, 5));