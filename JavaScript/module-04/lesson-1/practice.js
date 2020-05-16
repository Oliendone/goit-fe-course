const makePackage = function() {
  const takeProduct = function(product) {
    console.log(this);
    this.product = product;
  };

  return takeProduct;
};

const bag = {
  product: 'Fish',
  takeProduct: makePackage(),
};

bag.takeProduct('meat');
