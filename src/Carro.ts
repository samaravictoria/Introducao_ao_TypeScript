class Carro {
    private marca: string;
    private modelo: string;
    private ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes(): string {
        return `${this.marca} ${this.modelo} - Ano: ${this.ano} `
    }
}