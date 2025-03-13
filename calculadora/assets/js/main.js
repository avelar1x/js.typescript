function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector(".btn-clear"),

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.realizaContas()
                }
            })
        },

        realizaContas(){
             let conta = this.display.value

             try{
                conta = eval(conta)
                if(!conta){
                    alert("Conta inválida")
                    return
                }
                this.display.value = String(conta)
            } catch(e){
                alert("Conta inválida")
                    return
             }
        },

        clearDisplay(){
            this.display.value = ' '
        },

       apaga1() {
        this.display.value = this.display.value.slice(0, -1)
       },


        cliqueBotoes(){
            // this = calculadora
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains("btn-clear")){
                        this.clearDisplay()}
                if(el.classList.contains('btn-del')){
                        this.apaga1()}
                if(el.classList.contains('btn-eq')){
                    this.realizaContas()
                }
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }

    }
}

const calculador = criaCalculadora()
calculador.inicia()