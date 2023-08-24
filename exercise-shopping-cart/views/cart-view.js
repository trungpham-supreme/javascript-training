import Observer from './observer.js';

class CartView extends Observer {
  constructor(controler) {
    super();
    this.controler = controler;
    this.product = document.getElementById('products');
    this.cart = document.querySelector('.cart-items');
    this.totalItemElement = document.querySelector('.total-items');
    this.totalPriceElement = document.querySelector('.total-price');
    this.controler.model.addObserver(this);
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
}

export { CartView };
