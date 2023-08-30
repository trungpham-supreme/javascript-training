import Observable from './observable.js';

class CartModel extends Observable {
  constructor() {
    super();
  }

  addProductToCart(target) {
    // Retrieve products and cart items from local storage.
    const products = this.getProducts();
    const cartItems = this.getProductsInCart();

    // Get the input element for quantity.
    const inputQuantityElement = document.getElementById(
      `quantity-${target.dataset.id}`
    );

    let quantityProduct = parseInt(inputQuantityElement.value);

    if (isNaN(quantityProduct) || quantityProduct <= 0) {
      console.error('Invalid quantity:', quantityProduct);
      return;
    }

    // Find an existing cart item.
    const existingCartItem = cartItems.find(
      (item) => item.id === parseInt(target.dataset.id)
    );

    // Update the quantity of the existing cart item.
    if (existingCartItem) {
      existingCartItem.quantity = quantityProduct;
    } else {
      let newItem = {
        id: products[target.dataset.id].id,
        name: products[target.dataset.id].name,
        price: products[target.dataset.id].price,
        quantity: quantityProduct,
      };
      cartItems.push(newItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Method to remove a product from the cart.
  removeProductFromCart(target) {
    let indexToRemove = parseInt(target);
    let cartItems = this.getProductsInCart();
    cartItems.splice(indexToRemove, 1);

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Method to increase the quantity of a product in the cart.
  increaseQuantityProductFromCart(target) {
    let indexProduct = parseInt(target);
    let cartItems = this.getProductsInCart();
    ++cartItems[indexProduct].quantity;

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Method to retrieve cart items from local storage.
  getProductsInCart() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  }

  // Method to retrieve products from local storage.
  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
}

export { CartModel };
