// arguments sustenta todos os argumentos enviados
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);    
}
funcao({nome: 'Valmir', sobrenome: 'Avelar', idade: '20 anos'})

function funcao1([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)   
}
funcao1(['Luciana', 'Francisco', '59 anos'])

const conta = function(operador, acumulador, ...numeros){
    for( let numero of numeros ){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador) 
};
conta('+', 0, 10, 10, 10)