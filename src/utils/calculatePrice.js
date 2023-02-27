const calculateBookPrice = (books) => {
  return books.reduce((sum, curr) => sum + curr.quantity * curr.salePrice, 0);
};

export default calculateBookPrice;
