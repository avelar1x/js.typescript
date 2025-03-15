// Funções Construtoras -> Objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + " Sou um metodo");
    }
}

const p1 = new Pessoa('Valmir', 'Avelar');
const p2 = new Pessoa("Luciana", 'Francisco')
p1.metodo()
