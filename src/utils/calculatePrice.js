const calculateBookPrice = (books) => {
  const sum = books.reduce((sum, curr) => sum + curr.quantity * curr.salePrice, 0);
  if (sum >= 10000) {
    return sum;
  }
  return sum + 3000;
};
export default calculateBookPrice;
