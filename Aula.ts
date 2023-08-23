abstract class veiculo {
    marca: string;
    modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca
        this.modelo = modelo;
    }
    apresentar(){
        console.log('marca: '+ this.marca +' modelo: '+ this.modelo);
        
    }
}

class carro extends veiculo{
    portas: number
    constructor() {
        super("BMW", "series 4");
        this.portas = 4
    }

}

class moto extends veiculo {
    cilindradas: number
    constructor() {
        super("BMW", "F 900 R");
        this.cilindradas = 890
    }
}

let carrrrro =new carro();
carrrrro.apresentar();
