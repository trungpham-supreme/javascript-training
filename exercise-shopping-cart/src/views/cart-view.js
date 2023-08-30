import Observer from './observer.js';

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalItemElement = document.querySelector('.total-items');
    this.addButtonElement = document.querySelectorAll('.add-button');

    this.addButtonElement.forEach((button) => {
      button.addEventListener('click', controller);
    });

    this.controller.model.addObserver(this);
  }

  update(model) {
    this.totalItemElement.innerHTML = model.getProductsInCart().length;
  }
}

export { CartView };
