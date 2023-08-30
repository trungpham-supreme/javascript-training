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

    // Render the checkout view
    this.renderCheckout();

    this.removeButton = document.querySelectorAll('.remove-product');
    this.removeButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        controller.removeClickHandler(e);
      });
    });

    this.controller.model.addObserver(this);
  }

  // Render a single cart item in the checkout view
  renderCartItem(item, index) {
    const cartItemCheckoutElement = document.createElement('div');
    cartItemCheckoutElement.classList.add('cart-item-checkout');
    cartItemCheckoutElement.innerHTML = `
      <span class="cart-name-checkout">Name: ${item.name} * </span>
      <span class="cart-price-checkout">Price: $${item.price} * </span>
      <button class="decrease-quantity">-</button>
      <span class="cart-quantity-checkout">${item.quantity}</span>
      <button class="increase-quantity">+</button>
      <button class="remove-product" data-id="${index}">remove</button>
    `;
    return cartItemCheckoutElement;
  }

  // Render the entire checkout view with cart items
  renderCheckout() {
    this.cartCheckout.innerHTML = '';

    const cartItems = this.controller.model.getProductsInCart();

    // Loop through each cart item and render it
    cartItems.forEach((item, index) => {
      const cartItemCheckoutElement = this.renderCartItem(item, index);
      this.cartCheckout.appendChild(cartItemCheckoutElement);
    });

    // Calculate and display the total number of items and the total price
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Update the total item and total price elements
    this.totalItemCheckoutElement.innerHTML = totalItems;
    this.totalPriceCheckoutElement.textContent = `$${totalPrice}`;
  }

  update() {
    this.renderCheckout();
    location.reload();
  }
}

export { CheckoutView };
