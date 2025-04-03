import GeraCPF from "./modules/GeraCPF";
import './assets/css/style.css'

document.addEventListener('DOMContentLoaded',function(){
    const gera = new GeraCPF();
    const resultado = document.querySelector(".res");
    resultado.innerHTML = gera.geraNovoCpf();
});