import Observer from './observer.js';

class CheckoutView extends Observer {
  constructor(controller) {
    super();

    this.controller = controller;

    // Get DOM elements for cart-related information
    this.cartCheckout = document.querySelector('.cart-items-checkout');
    this.totalItemCheckoutElement = document.querySelector(
      '.total-items-checkout'
    );
    this.totalPriceCheckoutElement = document.querySelector(
      '.total-price-checkout'
    );

    // Retrieve cart items data from localStorage
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.products = JSON.parse(localStorage.getItem('products')) || [];

    // Render the checkout view
    this.renderCheckout();
  }

  renderCartItem(item) {
    const cartItemCheckoutElement = document.createElement('div');
    cartItemCheckoutElement.classList.add('cart-item-checkout');
    cartItemCheckoutElement.innerHTML = `
      <span class="cart-name-checkout">${item.name}</span>
      <span class="cart-price-checkout">${item.price}</span>
      <button class="decrease-quantity">-</button>
      <span class="cart-quantity-checkout">${item.quantity}</span>
      <button class="increase-quantity">+</button>
      <button class="remove-product">remove</button>
    `;
    return cartItemCheckoutElement;
  }

  // Render the entire checkout view
  renderCheckout() {
    this.cartCheckout.innerHTML = '';

    // Loop through each cart item and render it
    this.cartItems.forEach((item) => {
      const cartItemCheckoutElement = this.renderCartItem(item);
      this.cartCheckout.appendChild(cartItemCheckoutElement);

      const removeButton =
        cartItemCheckoutElement.querySelector('.remove-product');
      removeButton.addEventListener('click', () =>
        this.removeProductFromCart(item)
      );
    });

    // Calculate and display the total number of items and the total price
    const totalItems = this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    this.totalItemCheckoutElement.innerHTML = totalItems;
    this.totalPriceCheckoutElement.textContent = `$${totalPrice}`;
  }

  // Remove a product from the cart
  removeProductFromCart(itemToRemove) {
    // Filter out the removed item from the cartItems array
    this.cartItems = this.cartItems.filter((item) => item !== itemToRemove);

    // Update the corresponding product quantity in the products array
    const productToUpdate = this.products.find(
      (product) => product.id === itemToRemove.id
    );
    if (productToUpdate) {
      productToUpdate.quantity += itemToRemove.quantity;
      localStorage.setItem('products', JSON.stringify(this.products));
    }

    // Update local storage and re-render the checkout view
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.renderCheckout();
  }
}

export { CheckoutView };
