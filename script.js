const transactionEl = document.querySelector('.transactions');
const balanceNumberEl = document.querySelector('.balance-number');
const numberIncomeEl = document.querySelector('.number--income');
const numberExpensesEl = document.querySelector('.number--expenses');
const formEl = document.querySelector('.form');
const inputDescriptionEl = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');


const clickHandler = (e) => {
    // Remove transaction item remove visually
    const clickedEl = e.target.parentNode;
    clickedEl.remove();

    // update icome and expense
    const amountEl = clickedEl.querySelector('.transaction__amount');
    const amount = +amountEl.textContent;

    if (amount >0){     // update icome
        const currentIncomeEl = numberIncomeEl.textContent;
        const updatedIncomeEl = currentIncomeEl - amount;
        numberIncomeEl.textContent = updatedIncomeEl;
    } else {     // update expense
        const currentExpenseEl = numberExpensesEl.textContent;
        const updateExpenseEl = currentExpenseEl - (-amount);
        numberExpensesEl.textContent = updateExpenseEl;
    }

    // update balance
    const income = numberIncomeEl.textContent;
    const expense = numberExpensesEl.textContent;
    balanceNumberEl.textContent = income - expense;

     // function to change the color if it negative
    income - expense < 0 ? balanceNumberEl.style.color = 'red':'Black';
}

transactionEl.addEventListener('click', clickHandler);