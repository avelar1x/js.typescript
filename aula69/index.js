// Herança Com Classes
class Dispositivo{
    constructor(nome, marca){
        this.nome = nome;
        this.marca = marca;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + " já ligado");
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome +' já desligado'
            )
        }
        this.ligado = false;
    }
}

class Smartphone extends Dispositivo{
    constructor(nome, marca, cor){
        super(nome, marca);
        this.cor = cor;
    } 
}

class Tablet extends Dispositivo{
    constructor (nome, marca, cor){
        super(nome, marca);
        this.cor = cor;
    }
}

const t1 = new Tablet("Ipad 10", "Apple", 'Branco')
t1.ligar();
const s1 = new Smartphone('S20 Ultra', 'Samsung', "Preto");
s1.ligar();
const d1 =  new Dispositivo('Iphone X', 'Apple');
d1.ligar();

console.log(t1);
console.log(d1);
console.log(s1);