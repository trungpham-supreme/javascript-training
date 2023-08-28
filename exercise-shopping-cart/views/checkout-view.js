import Observer from './observer.js';

class CheckoutView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.cartCheckout = document.querySelector('.cart-items-checkout');
    this.totalItemCheckoutElement = document.querySelector(
      '.total-items-checkout'
    );
    this.totalPriceCheckoutElement = document.querySelector(
      '.total-price-checkout'
    );

    this.renderCheckout();
  }

  update(model) {}

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

  renderCheckout() {
    this.cartCheckout.innerHTML = '';

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach((item) => {
      const cartItemCheckoutElement = this.renderCartItem(item);
      this.cartCheckout.appendChild(cartItemCheckoutElement);
    });

    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    this.totalItemCheckoutElement.innerHTML = totalItems;
    this.totalPriceCheckoutElement.textContent = `$${totalPrice}`;
  }
}

export { CheckoutView };
