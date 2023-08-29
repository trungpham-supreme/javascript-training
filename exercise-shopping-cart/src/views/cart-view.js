import Observer from './observer.js';

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalItemElement = document.querySelector('.total-items');
    this.product = document.getElementById('products');
    this.product.addEventListener('click', controller);
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.totalItemElement.innerHTML = model.getProductsInCart().length;
  }
}

export { CartView };
