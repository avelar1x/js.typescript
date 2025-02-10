const h1 = document.querySelector(".container h1");
const data = new Date()

function getDayWeekText(dayWeek){
    let dayWeekText

    switch(dayWeek){
        case 0:
            dayWeekText = "Domingo";
            return dayWeekText;
        case 1:
            dayWeekText = "Segunda-Feira";
            return dayWeektext;
        case 2:
            dayWeekText = "Terça-Feira";
            return dayWeekText;
        case 3:   
            dayWeekText = "Quarta-Feira";
            return dayWeekText;
        case 4:
            dayWeekText = "Quinta-feira";
            return dayWeekText;
        case 5:
            dayWeekText = "Sexta-Feira";
            return dayWeekText;
        case 6:
            dayWeekText = 'Sabádo'
            return dayWeekText;
    }   
}

function getNameMonth(numberMonth){
    let nameMonth
    switch(numberMonth){
        case 0:
            nameMonth = 'Janeiro'
            return nameMonth
        case 1:
            nameMonth = 'Fevereiro'
            return nameMonth
        case 2:
            nameMonth = 'Março'
            return nameMonth
        case 3:
            nameMonth = 'Abril'
            return nameMonth
        case 4:
            nameMonth = 'Maio'
            return nameMonth
        case 5:
            nameMonth = 'Junho'
            return nameMonth
        case 6:
            nameMonth = 'Julho'
            return nameMonth
        case 7:
            nameMonth = 'Agosto'
            return nameMonth
        case 8:
            nameMonth = 'Setembro'
            return nameMonth
        case 9:
            nameMonth = 'Outubro'
            return nameMonth
        case 10:
            nameMonth = 'Novembro'
            return nameMonth
        case 11:
            nameMonth = 'Dezembro'
            return nameMonth
        
    }
}

function createDate(data){
    const dayWeek = data.getDay()
    const numberMonth = data.getMonth() 

    const nameDay = getDayWeekText(dayWeek)
    const nameMonth = getNameMonth(numberMonth)
    
    return (
        `${nameDay}, ${data.getDate()} de ${nameMonth}` +
        ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`

    );
    
}

h1.innerHTML = createDate(data);



