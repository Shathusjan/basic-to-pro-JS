const transactionEl = document.querySelector('.transactions');
const balanceNumberEl = document.querySelector('.balance-number');
const numberIncomeEl = document.querySelector('.number--income');
const numberExpensesEl = document.querySelector('.number--expenses');
const formEl = document.querySelector('.form');
const inputDescriptionEl = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');

const formEventHandle = e => {
    // prevent defauly behaviour of the browser
    e.preventDefault();

    // get input value
    const description = inputDescriptionEl.value;
    const amount = +inputAmountEl.value;

    // Check if description or amount is empty
    if (!description || !amount) {
        alert('Description and amount cannot be empty');
        return; // Stop processing if either is empty
    }

    //create transaction item HTML
    const transactionItemHTML = `
        <li class="transaction transaction--${amount>0 ? 'income':'expense'}">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">${amount>0 ? '+' : ''}${amount}</span>
            <button class="transaction__btn">X</button>
        </li>
        `;
        // insert new HTML
        transactionEl.insertAdjacentHTML('beforeend',transactionItemHTML);

    //add new values to the income and expenses
    if(amount>0){
        const currentIncome = +numberIncomeEl.textContent;
        const newIncome = currentIncome + amount;
        numberIncomeEl.textContent = newIncome;
    } else {
        const currentExpense = +numberExpensesEl.textContent;
        const newExpense = currentExpense -amount;
        numberExpensesEl.textContent = newExpense;
    }

    // update balance
    const income = +numberIncomeEl.textContent;
    const expense = +numberExpensesEl.textContent;
    balanceNumberEl.textContent = income - expense;

     // function to change the color if it negative
    income - expense < 0 ? balanceNumberEl.style.color = 'red':'Black';
    
    // Clear inputs
    inputAmountEl.value = '';
    inputDescriptionEl.value = '';

    // unfous (blur) inputs
    inputAmountEl.blur();
    inputDescriptionEl.blur();

    // remove no recode word

    const noRecord = transactionEl.querySelector('.no_record');
    noRecord.classList.add('re_no_record');
}

formEl.addEventListener('submit', formEventHandle);


const clickHandler = e => {
    // Remove transaction item remove visually
    const clickedEl = e.target.parentNode;
    clickedEl.remove();

    // update icome and expense
    const amountEl = clickedEl.querySelector('.transaction__amount');
    const amount = +amountEl.textContent;

    if (amount >0){     // update icome
        const currentIncomeEl = +numberIncomeEl.textContent;
        const updatedIncomeEl = currentIncomeEl - amount;
        numberIncomeEl.textContent = updatedIncomeEl;
    } else {     // update expense
        const currentExpenseEl = +numberExpensesEl.textContent;
        const updateExpenseEl = currentExpenseEl - (-amount);
        numberExpensesEl.textContent = updateExpenseEl;
    }

    // update balance
    const income = +numberIncomeEl.textContent;
    const expense = +numberExpensesEl.textContent;
    balanceNumberEl.textContent = income - expense;

     // function to change the color if it negative
    income - expense < 0 ? balanceNumberEl.style.color = 'red':'Black';
}

transactionEl.addEventListener('click', clickHandler);