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