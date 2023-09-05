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

    this.controller.model.addObserver(this);

    this.renderCheckout();

    // Attach event listener for delegated click events on the cartCheckout element
    this.cartCheckout.addEventListener('click', (event) => {
      const target = event.target;
      const index = target.getAttribute('data-id');

      // Determine the action based on the clicked element's classs
      if (target.classList.contains('remove-product')) {
        this.controller.removeClickHandler(index);
      }
      if (target.classList.contains('increase-quantity')) {
        this.controller.increaseQuantityClickHandler(index);
      }
      if (target.classList.contains('decrease-quantity')) {
        this.controller.decreaseQuantityClickHandler(index);
      }
    });
  }

  // Render a single cart item in the checkout view
  renderCartItem(item, index) {
    const cartItemCheckoutElement = document.createElement('div');
    cartItemCheckoutElement.classList.add('cart-item-checkout');
    cartItemCheckoutElement.innerHTML = `
      <span class="cart-name-checkout">Name: ${item.name} * </span>
      <span class="cart-price-checkout">Price: $${item.price} * </span>
      <button class="decrease-quantity" data-id="${index}">-</button>
      <span class="cart-quantity-checkout">${item.quantity}</span>
      <button class="increase-quantity" data-id="${index}">+</button>
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
  }
}

export { CheckoutView };
