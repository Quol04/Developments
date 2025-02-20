// Get DOM elements
const balanceEl = document.getElementById('balance');
const moneyPlusEl = document.getElementById('money-plus');
const moneyMinusEl = document.getElementById('money-minus');
const listEl = document.getElementById('list');
const formEl = document.getElementById('form');
const descriptionEl = document.getElementById('description');
const amountEl = document.getElementById('amount');
const typeEl = document.getElementById('type');
const categoryEl = document.getElementById('category');

// Get transactions from localStorage or initialize empty array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Initialize Chart.js
let expenseChart;

// Initialize chart
function initializeChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    expenseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Income',
                    data: [],
                    borderColor: '#22c55e',
                    tension: 0.4
                },
                {
                    label: 'Expenses',
                    data: [],
                    borderColor: '#ef4444',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => `$${value}`
                    }
                }
            }
        }
    });
}

// Update chart data
function updateChart() {
    const monthlyData = transactions.reduce((acc, transaction) => {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'short' });
        
        if (!acc[month]) {
            acc[month] = { income: 0, expenses: 0 };
        }
        
        if (transaction.type === 'income') {
            acc[month].income += transaction.amount;
        } else {
            acc[month].expenses += transaction.amount;
        }
        
        return acc;
    }, {});

    const months = Object.keys(monthlyData);
    const incomeData = months.map(month => monthlyData[month].income);
    const expenseData = months.map(month => monthlyData[month].expenses);

    expenseChart.data.labels = months;
    expenseChart.data.datasets[0].data = incomeData;
    expenseChart.data.datasets[1].data = expenseData;
    expenseChart.update();
}

// Add transaction
function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        id: generateID(),
        description: descriptionEl.value,
        amount: +amountEl.value,
        type: typeEl.value,
        category: categoryEl.value,
        date: new Date().toISOString()
    };

    transactions.push(transaction);
    updateLocalStorage();
    init();
    
    // Reset form
    formEl.reset();
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 1000000);
}

// Delete transaction
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

// Update localStorage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Update values
function updateValues() {
    const amounts = transactions.map(transaction => 
        transaction.type === 'income' ? transaction.amount : -transaction.amount
    );

    const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2);
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, amount) => acc + amount, 0)
        .toFixed(2);
    const expense = (amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => acc + amount, 0) * -1)
        .toFixed(2);

    balanceEl.textContent = `$${total}`;
    moneyPlusEl.textContent = `+$${income}`;
    moneyMinusEl.textContent = `-$${expense}`;
}

// Update transaction list
function updateList() {
    listEl.innerHTML = '';
    
    transactions.forEach(transaction => {
        const sign = transaction.type === 'income' ? '+' : '-';
        const typeClass = transaction.type === 'income' ? 'plus' : 'minus';

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="details">
                <strong>${transaction.description}</strong>
                <span class="category">${transaction.category}</span>
            </div>
            <div class="amount ${typeClass}">${sign}$${Math.abs(transaction.amount).toFixed(2)}</div>
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">×</button>
        `;

        listEl.appendChild(li);
    });
}

// Initialize app
function init() {
    updateList();
    updateValues();
    updateChart();
}

// Event listeners
formEl.addEventListener('submit', addTransaction);

// Initialize chart and app
initializeChart();
init();