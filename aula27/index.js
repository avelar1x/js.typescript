// Objeto Date \\

const tresHoras = 60 * 60 * 3 * 1000 // adicionar hora
const umDia = 60 * 60 * 24 * 1000 // adicionar um dia
const data = new Date(0 + tresHoras + umDia)
console.log(data.toString())

const data1 = new Date(2005, 1, 13, 4, 39, 54)
console.log(data1.toString())

const data2 = new Date('2022-10-10 20:39:47')
console.log('Dia', data2.getDate())
console.log('Mês', data2.getMonth() + 1)
console.log('Ano', data2.getFullYear())
console.log('Hora', data2.getHours())
console.log('Minuto', data2.getMinutes())
console.log('Dia Semana', data2.getDay())
console.log(data2.toString())

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda (data.getDate())
    const mes = zeroAEsquerda (data.getMonth() + 1)
    const ano = zeroAEsquerda (data.getFullYear())
    const hora = zeroAEsquerda (data.getHours())
    const min = zeroAEsquerda (data.getMinutes())

    return `${dia}/${mes}/${ano} ${hora}:${min}`
}

const data3 = new Date()
const dataBrasil = formataData(data3)
console.log(dataBrasil)