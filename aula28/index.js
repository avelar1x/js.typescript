// Switch (Case) \\

function getDayWeekText(dayWeek){
    let dayWeekText
    switch (dayWeek) {
        case 0: 
            dayWeekText = 'Domingo'
            break  
        case 1:  
            dayWeekText = 'Segunda-Feira'
            break
        case 2:  
            dayWeekText = 'Terça-Feira'
            break
        case 3:  
            dayWeekText = 'Quarta-Feira'
            break
        case 4:  
            dayWeekText = 'Quinta-Feira'
            break
        case 5:  
            dayWeekText = 'Sexta-Feira'
            break
        case 6:  
            dayWeekText = 'Sabádo'
            break
    } 
    return dayWeekText
}
const data = new Date()
let dayWeek = data.getDay()
const dayWeekText = getDayWeekText(dayWeek) 

console.log(dayWeek, dayWeekText)



