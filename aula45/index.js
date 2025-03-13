// Factory Functions
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
           return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift()
            this.sobrenome = valor.join(" ") // Juntar os valor
            console.log(valor);
        },

        fala (assunto){
            return `${this.nome} está ${assunto}`
        },
        altura: altura,
        peso: peso,
        
        // Getter
        get imc(){
            const indice = this.peso / (this,altura ** 2 )
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Valmir', 'Avelar', 1.85, 76)
p1.nomeCompleto = 'Guilherme de Avelar Caro'
console.log(p1.nomeCompleto, p1.imc)
const p2 = criaPessoa('Luciana', 'Francisco', 1.60, 57)
console.log(p2.fala('falando sobre nada'))