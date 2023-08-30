class CheckoutController {
  constructor(model) {
    this.model = model;
  }

  removeClickHandler(e) {
    this.model.removeProductFromCart(e.target.dataset.id);
    this.model.notify(this.model);
  }

  increaseQuantityClickHandler(e) {
    this.model.increaseQuantityProductFromCart(e.target.dataset.id);
    this.model.notify(this.model);
  }
}

export { CheckoutController };
