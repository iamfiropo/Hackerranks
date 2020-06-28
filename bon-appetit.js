function bonAppetit(bill, k, b) {
  const sum = bill.reduce((acc, initialValue) => acc + initialValue);

  const payment = b - (sum - bill[k]) / 2;
  if (payment) {
    console.log(payment);
  } else {
    console.log("Bon Appetit");
  }
}
