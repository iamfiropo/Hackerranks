function priceCheck(products, productPrices, productSold, soldPrice) {
  let productMap = new Map();
  let soldMap = new Map();
  let count = 0;
  let result = 0;

  for (let product of products) {
    productMap.set(product, productPrices[count]);
    ++count;
  };

  count = 0;

  for (let sold of productSold) {
    soldMap.set(sold, soldPrice[count]);
    ++count;
  };

  for (let [key, value] of soldMap) {
    if (productMap.has(key) && productMap.get(key) !== value) ++result;
  }

  return result;
}
let products = ["eggs", "milk", "cheese"];
let productPrices = [2.89, 3.29, 5.79];
let productSold = ["eggs", "eggs", "milk", "cheese"];
let soldPrice = [2.89, 2.99, 3.29, 5.79];
console.log(priceCheck(products, productPrices, productSold, soldPrice));
