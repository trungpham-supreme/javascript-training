import Observable from './observable.js';

class CartModel extends Observable {
  constructor() {
    super();
  }

  addProductToCart(target) {
    const products = this.getProducts();
    const cartItems = this.getProductsInCart();
    const existingCartItem = cartItems.find(
      (item) => item.id === parseInt(target.dataset.id)
    );
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      let newItem = {
        id: products[target.dataset.id].id,
        name: products[target.dataset.id].name,
        price: products[target.dataset.id].price,
        quantity: 1,
      };
      cartItems.push(newItem);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  getProductsInCart() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  }
}

export { CartModel };
