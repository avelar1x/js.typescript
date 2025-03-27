function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, "cpfLimpo", {
        get: function(){
            return cpfEnviado.replace(/\D+/g, "");
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2; 

  ; console.log(novoCpf)
    return true;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
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

const cpf = new ValidaCPF('127.361.076-00')

console.log(cpf.valida())