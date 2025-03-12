//Multiplicação
interface Multiplicação{
    (a: number, b: number): number;
}

const multiplicar: Multiplicação = (a: number, b: number) => a * b;
console.log(multiplicar(10, 5));

//Carro Interface
interface CarroInteface {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

//Instanciando um objeto carro com a interface
const meuCarro: CarroInteface = {
    marca: "Nissan",
    modelo: "Kicks",
    ano: 2018,
    motor: "1.0"
};

console.log(meuCarro);