let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
    moneyData: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let quest1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
        quest2 = prompt("Во сколько обойдется?", '');

    if ((typeof (quest1)) === 'string' && (typeof (quest1)) != null && (typeof (quest2)) != null && quest1 != '' && quest1.length < 50) {
        console.log('Done!');
        appData.expenses[quest1] = quest2;
    } else {
        console.log('Breake!');
        i--;
    }

};



//Цикл WHILE


// let i = 0;
// while (i < 2) {
//     let quest1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         quest2 = prompt("Во сколько обойдется?", '');

//     if ((typeof (quest1)) === 'string' && (typeof (quest1)) != null && (typeof (quest2)) != null && quest1 != '' && quest1.length < 50) {
//         console.log('Done!');
//         appData.expenses[quest1] = quest2;
//     } else {
//         console.log('Breake!');
//         i--;
//     }
//     i++;
// };

// WHILE DO

// let i = 0;

// do {
//     let quest1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         quest2 = prompt("Во сколько обойдется?", '');


//     if ((typeof (quest1)) === 'string' && (typeof (quest1)) != null && (typeof (quest2)) != null && quest1 != '' && quest1.length < 50) {
//         console.log('Done!');
//         appData.expenses[quest1] = quest2;
//     } else {
//         console.log('Breake!');
//         i--;
//     }
//     i++;
// }
// while (i < 2);



appData.moneyPerDay = appData.moneyData / 30;
alert('Ежедневный бюджет состовляет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень дохода');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень дохода');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень дохода');
} else {
    console.log('Ошибка!');
};