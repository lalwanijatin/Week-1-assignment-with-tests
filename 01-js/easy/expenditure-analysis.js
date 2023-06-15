/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let transactionMap = new Map();
  for(let transaction of transactions){
    if(!transactionMap.has(transaction.category)){
      transactionMap.set(transaction.category,0);
    }
    transactionMap.set(transaction.category, transactionMap.get(transaction.category)+transaction.price);
  }

  let totalSpentByCategory = [];
  for(let [category,totalPrice] of transactionMap){
    totalSpentByCategory.push({
      category: category,
      totalSpent: totalPrice
    });
  }
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
