import Observer from './observer.js';

class ProductView extends Observer {
  constructor(productController, cartController) {
    super();
    this.productController = productController;
    this.cartController = cartController;
    this.product = document.getElementById('products');
    this.product.innerHTML = this.renderProducts(
      productController.model.products
    );
    this.product.addEventListener('click', cartController);
    this.product.addEventListener('click', productController);
    this.productController.model.addObserver(this);
    this.cartController.model.addObserver(this);
  }

  update(model) {
    this.product.innerHTML = this.renderProducts(model.products);
  }

  // Loop and render product
  renderProducts(products) {
    return products
      .map(
        (product, index) =>
          `
    <tr>
    <td class="name">${product.name}</td>
    <td class="price">${product.price}</td>
    <td class="quantity">${product.quantity}</td>
    <td class="action">
    <button class="add-button" data-id="${index}">Add</button>
    </td>
    </tr>
    `
      )
      .join('');
  }
}

export { ProductView };
