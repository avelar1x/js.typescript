
let numeroA = prompt("Digite o número A");
      let numeroB = prompt("Digite o número B");
      let resultado = Number(numeroA) + Number(numeroB)
      alert(resultado);

      let numeroInicio = prompt("Digite um número inteiro");
      let numeroFim = prompt("Digite um número inteiro novamente");
      
      numeroInicio = Math.floor(numeroInicio);
      numeroFim = Math.floor(numeroFim);
      
      let numeroAleatorio =
        Math.floor(Math.random() * (numeroFim - numeroInicio + 1)) + numeroInicio;
      
      console.log("O número gerado é: ", numeroAleatorio);

