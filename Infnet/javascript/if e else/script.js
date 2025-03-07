/*const idade = Number(prompt('Digite a sua idade'))

if (idade >= 18){
    alert("Pode entrar")
} else {
    alert("Proibido a entrada")
}

const password = prompt("Digite a senha")

if(password === 'valmir123'){
    alert("Login liberado")
} else {
    alert("Acesso negado")
}

const resposta = prompt("Você gosta de cats?").toLowerCase()
const res = resposta === 'Sim'

if (resposta){
    alert('Você é legal')
} else {
    alert("Você não é legal")
}
*/
/* let a;
let b;
let c;
let d;
let e;

// Comentar SOMENTE as linhas abaixo
a = 3;
//a = 2;
//a = 7;
//a = 0;

b = undefined;
//b = null;
//b = 1;
//b = "null";

//c = "2000" + "20";
c = /*"20"*/ +20;
//c = null;
//c = undefined;
/*
//d = null;
d = undefined;
//d = 0;
//d = "undefined";

e = null;
//e = 0;
//e = NaN;
//e = "null";
// Comentar SOMENTE as linhas acima

const verificacaoA = a > 2 && a < 4;
const verificacaoB = b === undefined;
const verificacaoC = typeof c === "number";
const verificacaoD = d == undefined;
const verificacaoE = e === d;

console.log("a=" + verificacaoA);
console.log("b=" + verificacaoB);
console.log("c=" + verificacaoC);
console.log("d=" + verificacaoD);
console.log("e=" + verificacaoE);
*/


let escolha = prompt("Escolha entre: Pedra, Papel ou Tesoura").toLowerCase();
let opcoes = ["Pedra", "Papel", "Tesoura"];
let escolhaBot = opcoes[Math.floor(Math.random() * opcoes.length)];
alert("O bot escolheu: " + escolhaBot);

if (escolha === escolhaBot) {
  alert("Empate!");
} else if (
  (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
  (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
  (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
  alert("Você ganhou!");
} else {
  alert("O computador ganhou!");
}
