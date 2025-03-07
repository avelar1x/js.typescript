try{
    //Quando não há erros
    //console.log(aa);
    console.log("Abri um arquivo");
    console.log("Manipulei o Arquivo e gerou um erro");
    console.log('Fechei o arquivo');
} catch (e){
    //Quando há erros
    console.log("Trtatando o erro");
} finally {
    // Sempre
    console.log("Finnally, sempre é executado");
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {

    })
}

try{
const data = new Date('01-01-1979 12:58:12');
const hora = retornaHora();
console.log(hora, data)
} catch(e){

}finally{
    console.log("Tenha um bom dia.");
}