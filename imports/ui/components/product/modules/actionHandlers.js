handleCreateProduct = (product) => {

  console.log("addind a new product to the list ", product);

  Meteor.call('products.insert', product, (error, productId) => {
    if (error) {
      throw new Meteor.Error("product-insert", error.reason);

    } else {
      console.log('Product added with ID:', productId);
    }
  });
}