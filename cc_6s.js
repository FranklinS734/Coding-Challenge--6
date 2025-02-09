// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    // Calculate profit using the formula: (Selling Price - Cost Price) * Units Sold
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}
// Test Data
console.log(calculateProfit(20, 30, 100)); // Total Profit: $1000
console.log(calculateProfit(50, 70, 200)); // Total Profit: $4000