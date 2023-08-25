import Observer from './observer.js';

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.product = document.getElementById('products');
    this.cart = document.querySelector('.cart-items');
    this.totalItemElement = document.querySelector('.total-items');
    this.totalPriceElement = document.querySelector('.total-price');
    this.checkout = document.querySelector('.checkout-button');
    this.checkout.addEventListener('click', this.handleCheckout.bind(this)); // Bind the event handler to the current instance
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.cart.innerHTML = '';
    model.cartItems.forEach((item) => {
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `
        <span class="cart-name">${item.name}</span>
        <span class="cart-price">${item.price}</span>
        <span class="cart-quantity">${item.quantity}</span>
      `;
      this.cart.appendChild(cartItemElement);
    });

    const totalItems = model.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = model.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    this.totalItemElement.innerHTML = totalItems;
    this.totalPriceElement.textContent = `$${totalPrice}`;
  }

  handleCheckout() {
    // Open a new tab with the specified URL
    const newTab = window.open(
      'http://127.0.0.1:5500/exercise-shopping-cart/checkout.html',
      '_blank'
    );

    newTab.addEventListener('load', () => {
      const totalItemCheckoutElement = newTab.document.querySelector(
        '.total-items-checkout'
      );
      const totalPriceCheckoutElement = newTab.document.querySelector(
        '.total-price-checkout'
      );

      const cartItemCheckout = newTab.document.querySelector(
        '.cart-items-checkout'
      );
      cartItemCheckout.innerHTML = '';

      this.controller.model.cartItems.forEach((item) => {
        const cartItemCheckoutElement = document.createElement('div');
        cartItemCheckoutElement.classList.add('cart-item-checkout');
        cartItemCheckoutElement.innerHTML = `
          <span class="cart-name-checkout">${item.name}</span>
          <span class="cart-price-checkout">${item.price}</span>
          <span class="cart-quantity-checkout">${item.quantity}</span>
        `;
        cartItemCheckout.appendChild(cartItemCheckoutElement);
      });

      const totalItems = this.controller.model.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = this.controller.model.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      totalItemCheckoutElement.innerHTML = totalItems;
      totalPriceCheckoutElement.textContent = `$${totalPrice}`;
    });
  }
}

export { CartView };
