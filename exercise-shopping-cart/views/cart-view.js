import Observer from './observer.js';

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalProduct = document.querySelector('.total-product');
    this.cartDetail = document.querySelector('.detail');
    this.checkout = document.querySelector('.checkout-button');
    this.checkout.addEventListener('click', this.handleCheckout.bind(this)); // Bind the event handler to the current instance
    this.cartItemCheckout = document.querySelector('.cart-items');
    this.totalItemCheckoutElement = document.querySelector('.total-items');
    this.totalPriceCheckoutElement = document.querySelector('.total-price');
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.totalProduct.textContent = model.cartItems.length;
  }

  handleCheckout() {
    this.cartDetail.style.display = 'block';
    this.cartItemCheckout.innerHTML = '';

    this.controller.model.cartItems.forEach((item) => {
      const cartItemCheckoutElement = document.createElement('div');
      cartItemCheckoutElement.classList.add('cart-item-checkout');
      cartItemCheckoutElement.innerHTML = `
          <span class="cart-name-checkout">${item.name}</span>
          <span class="cart-price-checkout">${item.price}</span>
          <span class="cart-quantity-checkout">${item.quantity}</span>
        `;
      this.cartItemCheckout.appendChild(cartItemCheckoutElement);
    });

    const { totalItems, totalPrice } = this.calculateTotalValues(
      this.controller.model.cartItems
    );
    this.totalItemCheckoutElement.textContent = totalItems;
    this.totalPriceCheckoutElement.textContent = `$${totalPrice}`;
  }

  calculateTotalValues(cartItems) {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  }
}

export { CartView };
