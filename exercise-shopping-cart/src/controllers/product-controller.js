class ProductController {
  constructor(model) {
    this.model = model;
  }

  // Event listener interface
  handleEvent(event) {
    event.stopPropagation();
    switch (event.type) {
      case 'click':
        this.clickHandler(event.target);
        break;
      default:
        console.log(event.target);
    }
  }

  // Change the model
  clickHandler(target) {
    this.model.decreaseProduct(target.dataset.id);
    this.model.notify(this.model);
  }
}

export { ProductController };
