//Arrays. Os arrays são indexados pelos seus elementos
                 //0      //1      //2
const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)
console.log(alunos[1])

alunos[0] = "Valmir" //Modificar array
console.log(alunos)

alunos[3] = "Luciana" //Adicionar elementos no array
console.log(alunos) 

alunos.push('Lucas')
alunos.push("Ana")
console.log(alunos) //Adicionar elementos no final do array

alunos.unshift('Pedro') //Adicionar elementos no começo do array
console.log(alunos)

const remove = alunos.pop() //Elimina o ultimo elemento do array 
console.log(remove) //Verificar elementos que foram removidos do array
console.log(alunos)

const removeIn = alunos.shift() //Elimina o primeiro elemento do array
console.log(removeIn)
console.log(alunos)

delete alunos[1] //Deletar elementos do array ( O elemento fica vazio)
console.log(alunos)

alunos[1] ='Pedro'
console.log(alunos.slice(0, 3))//Fatiar os elementos 