class CheckoutController {
  constructor(model) {
    this.model = model;
  }

  removeClickHandler(index) {
    this.model.removeProductFromCart(index);
    this.model.notify(this.model);
  }

  increaseQuantityClickHandler(index) {
    this.model.increaseQuantityProductFromCart(index);
    this.model.notify(this.model);
  }

  decreaseQuantityClickHandler(index) {
    this.model.decreaseQuantityProductFromCart(index);
    this.model.notify(this.model);
  }
}

export { CheckoutController };
