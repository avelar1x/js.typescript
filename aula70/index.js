// Métodos de instância e estáticos
class Televisão {
    constructor(marca, cor){
        this.marca = marca;
        this.cor = cor; 
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume += 1
    }
    diminuirVolume(){
        this.volume -= 1
    }
    // Método Estático
    static trocaCanal(){
        console.log("Canal alterado com sucesso!")
    }

}

const tv1 = new Televisão('LG', 'Preta')
console.log(tv1);

tv1.aumentarVolume()
Televisão.trocaCanal()


