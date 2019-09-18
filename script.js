let money = prompt("Ваш бюджет на месяц?", "USD");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let thing = prompt("Введите обязательную статью расходов в этом месяце...");
let howMuch = prompt("Во сколько обойдется?");
let appData = {
    salary: money,
    timeData: time,
    expenses: {
        thing: howMuch
    },
    optionalExpenses: {},
    income: {},
    savings: false
};


alert("Ваш бюджет на день:" + " " + howMuch / 30);