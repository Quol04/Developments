// script.js - Enhanced Chart and Expense Tracker Functionality

document.addEventListener("DOMContentLoaded", () => {
    const balanceEl = document.getElementById("balance");
    const moneyPlusEl = document.getElementById("money-plus");
    const moneyMinusEl = document.getElementById("money-minus");
    const listEl = document.getElementById("list");
    const formEl = document.getElementById("form");
    const descriptionEl = document.getElementById("description");
    const amountEl = document.getElementById("amount");
    const dateEl = document.getElementById("date");
    const typeEl = document.getElementById("type");
    const categoryEl = document.getElementById("category");
    const darkModeToggle = document.createElement("button");

    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Chart.js Setup
    const ctx = document.getElementById("expenseChart").getContext("2d");
    let chartType = "pie";
    let chart;

    function initChart() {
        if (chart) chart.destroy(); // Destroy previous instance
        chart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: ["Food", "Transportation", "Entertainment", "Bills", "Shopping", "General"],
                datasets: [{
                    label: "Expenses",
                    data: calculateCategoryTotals(),
                    backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4caf50", "#9966ff", "#ff9f40"],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: true },
                    tooltip: { enabled: true }
                },
                animation: {
                    duration: 1000,
                    easing: "easeInOutBounce"
                }
            }
        });
    }

    function calculateCategoryTotals() {
        const categories = { food: 0, transportation: 0, entertainment: 0, bills: 0, shopping: 0, general: 0 };
        transactions.forEach(({ amount, type, category }) => {
            if (type === "expense") categories[category] += Math.abs(amount);
        });
        return Object.values(categories);
    }

    function updateUI() {
        listEl.innerHTML = "";
        let total = 0, income = 0, expense = 0;

        transactions.forEach(({ id, description, amount, type }) => {
            const sign = type === "income" ? "+" : "-";
            total += type === "income" ? amount : -amount;
            if (type === "income") income += amount;
            else expense += Math.abs(amount);

            const li = document.createElement("li");
            li.classList.add("transaction");
            li.innerHTML = `
                ${description} <span>${sign}$${Math.abs(amount).toFixed(2)}</span>
                <button class="delete-btn" onclick="removeTransaction(${id})">X</button>
            `;
            listEl.appendChild(li);
        });

        balanceEl.textContent = `$${total.toFixed(2)}`;
        moneyPlusEl.textContent = `+$${income.toFixed(2)}`;
        moneyMinusEl.textContent = `-$${expense.toFixed(2)}`;
        
        localStorage.setItem("transactions", JSON.stringify(transactions));
        initChart();
    }

    function addTransaction(e) {
        e.preventDefault();
        const transaction = {
            id: Date.now(),
            description: descriptionEl.value,
            amount: parseFloat(amountEl.value),
            date: dateEl.value,
            type: typeEl.value,
            category: categoryEl.value
        };

        transactions.push(transaction);
        updateUI();
        formEl.reset();
    }

    function removeTransaction(id) {
        transactions = transactions.filter(tx => tx.id !== id);
        updateUI();
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    function toggleChartType() {
        const chartTypes = ["pie", "bar", "doughnut"];
        chartType = chartTypes[(chartTypes.indexOf(chartType) + 1) % chartTypes.length];
        initChart();
    }

    // Dark Mode Button
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.classList.add("btn");
    document.querySelector(".dark-mode-toggle").appendChild(darkModeToggle);
    darkModeToggle.addEventListener("click", toggleDarkMode);

    document.getElementById("expenseChart").addEventListener("click", toggleChartType);
    formEl.addEventListener("submit", addTransaction);
    updateUI();
});
