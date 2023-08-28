import Observable from './observable.js';

class CartModel extends Observable {
  constructor(productModel) {
    super();
    this.cartItems = [];
    this.productModel = productModel;
    this.products = this.productModel.getProducts();
  }

  addProductToCart(product) {
    const existingCartItem = this.cartItems.find(
      (item) => item.id === parseInt(product.dataset.id)
    );
    if (this.products[product.dataset.id].quantity > 0) {
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        let newItem = {
          id: this.products[product.dataset.id].id,
          name: this.products[product.dataset.id].name,
          price: this.products[product.dataset.id].price,
          quantity: 1,
        };
        this.cartItems.push(newItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }
}

export { CartModel };
