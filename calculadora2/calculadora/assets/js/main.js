function Calculadora(){
    this.display = document.querySelector(".display");

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter()
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13)return;
            this.realizaConta()
        })
    }    

    this.capturaCliques = () => {
        document.addEventListener("click", e => {
            const el = e.target
            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-clear')) this.clear(el)
            if(el.classList.contains('btn-del')) this.del(el)
            if(el.classList.contains('btn-eq')) this.realizaConta(el)

        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText
    this.clear = () => this.display.value = ""
    this.del = () => this.display.value = this.display.value.slice(0, -1)
    this.realizaConta = () => {
        try {
            let conta = eval(this.display.value); // Executa a conta

            if (conta === undefined || conta === null || isNaN(conta)) {
                alert("Conta inválida");
                return;
            }

            this.display.value = conta; // Atualiza o display com o resultado
        } catch (e) {
            alert("Conta inválida");
        }
    }
    
    
}

const calculadora = new Calculadora();
calculadora.inicia();