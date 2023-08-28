import Observer from './observer.js';

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalItemElement = document.querySelector('.total-items');
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.totalItemElement.innerHTML = model.cartItems.length;
  }
}

export { CartView };
