class ValidaCPF {
    constructor(cpfEnviado){
    Object.defineProperty(this, "cpfLimpo", {
        get: function(){
            return cpfEnviado.replace(/\D+/g, "");
            }
        })
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
    
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2; 
        return novoCpf === this.cpfLimpo
    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)
        let contadorRegressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
        ac += (contadorRegressivo * Number(val))
        contadorRegressivo --
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0': String(digito)
    }

    geraNovoCpf(){
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2)   
      const digito1 = this.geraDigito(cpfSemDigitos)   
      const digito2 = this.geraDigito(cpfSemDigitos + digito1)  
    }

    geraDigito(cpfSemDigitos){
        let total = 0
        let reverse = cpfSemDigitos.length  + 1
        for (let stringNum of cpfSemDigitos){
            console.log(stringNum, reverse)
            total += reverse * Number(stringNum)
            reverse--
        }
    }

    isSequencia(){
        const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
        if(!this.geraNovoCpf()) return false
    }

   
}

const cpf = new ValidaCPF('144.665.226.26')

if(cpf.valida()) {
    console.log("Cpf Válido")
} else {
    console.log("Cpf Inválido")
}