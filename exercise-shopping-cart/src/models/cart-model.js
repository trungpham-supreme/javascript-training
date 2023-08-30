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

  removeProductFromCart(target) {
    // Filter out the removed item from the cartItems array
    let indexToRemove = parseInt[target];
    let cartItems = this.getProductsInCart();
    cartItems.splice(indexToRemove, 1);

    // Update local storage and re-render the checkout view
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Method to retrieve cart items from local storage.
  getProductsInCart() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
}

export { CartModel };
