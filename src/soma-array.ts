let valores: number[] = [20, 30, 50];

let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log(`Soma dos valores: ${somaValores}`) 