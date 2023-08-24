class CartController {
  constructor(model) {
    this.model = model;
  }

  // Event listener interface
  handleEvent(event) {
    event.stopPropagation();
    switch (event.type) {
      case 'click':
        this.clickHandler(event.target);
      default:
        console.log(event.target);
    }
  }

  // Change the model
  clickHandler(target) {
    this.model.addProductToCart(target);
    this.model.notify(this.model);
  }
}

export { CartController };
