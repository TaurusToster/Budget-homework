"use strict";
let userMoney = prompt("What's your month budget?");
let dateToday = prompt("Enter todays date (YYYY-MM-DD)");
let needs1 = prompt("Please, enter mandatory expense article");
let needs1Cost = prompt("How much would it cost?");
let appData = {
    monthBudget: userMoney,
    date: dateToday,
    expenses: {
    },
    optionalExpences: {},
    income: [],
    savings: false,
};
appData.expenses.needs1 = needs1Cost;
alert("Your personal budget for 1 day is " + (appData.monthBudget / 30));