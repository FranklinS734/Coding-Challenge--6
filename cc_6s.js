// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    // Calculate profit using the formula: (Selling Price - Cost Price) * Units Sold
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}
// Test Data
console.log(calculateProfit(20, 30, 100)); // Total Profit: $1000
console.log(calculateProfit(50, 70, 200)); // Total Profit: $4000

// Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) {
    // Compute sales tax using the formula: Amount * Tax Rate
    let salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;
};

// Test Cases
console.log(calculateSalesTax(100,.07)); // Sales Tax: $7
console.log(calculateSalesTax(500,.1)); // Sales Tax: $50

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    // Creating bonus rates based on performance
    const bonusRates = { "Amazing": 0.20, "Good": 0.10, "Average": 0.05 };
    let bonus = salary * (bonusRates[performanceRating] || 0);
    return `Bonus: $${bonus}`;
};

// Test Cases
console.log(calculateBonus(5000, "Amazing")); // Bonus: $1000
console.log(calculateBonus(7000, "Good"));    // Bonus: $700

// Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    const pricing = { "Basic": 10, "VIP": 20, "VIP Plus": 50 }; // Setting pricing for different plans
    let totalCost = (pricing[plan] || 0) * months - discount;
    return `Total Cost: $${totalCost}`;
}

// Test Data
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Total Cost: $50
console.log(calculateSubscriptionCost("VIP", 12, 0)); // Total Cost: $240

// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    // Converting currency by multiplying amount by rate
    let convertedAmount = amount * exchangeRate;
    return `Converted Amount: $${convertedAmount.toFixed(2)}`;
}

// Test Data
console.log(convertCurrency(100, 1.1)); // Converted Amount: $110 
console.log(convertCurrency(250, .85)); // Converted Amount: $212.5 