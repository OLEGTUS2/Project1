let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    moneyData: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
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

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert('Ежедневный бюджет состовляет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень дохода');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень дохода');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень дохода');
        } else {
            console.log('Ошибка!');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let optExpensesQuestion = prompt("Статья необязательных расходов?");
            if (typeof (optExpensesQuestion) === 'string' && typeof (optExpensesQuestion) != null && optExpensesQuestion != '') {
                appData.optionalExpenses[i] = optExpensesQuestion;
            } else {
                alert('Информация введена неправильно!');
                i--;
            }

        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Через запятую)');

        if (typeof (items) != 'string' || typeof (items) == null || items == '') {
            console.log('Вы ввели некорректные данные или не ввели их вовсе!');

        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что то еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function forceArr(itemmass, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmass);
        });

    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}