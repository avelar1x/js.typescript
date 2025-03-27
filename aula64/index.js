// SUperclasse
function Conta(ag, cc, saldo, limite){
    this.ag = ag;
    this.cc = cc;   
    this.saldo = saldo; 
    this.limite = limite;
}

Conta.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
    }     

    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag.: ${this.ag} Cc:${this.cc}` + ` Saldo: R$${this.saldo.toFixed(2)}` + ` Limite Da Conta: R$${this.limite}`);
}

const conta1 = new Conta(1719, 102242, 15000.657, 50000)
conta1.depositar(1222.567)
conta1.sacar(614300)