import Observer from './observer.js';

class ProductView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.product = document.getElementById('products');
    this.product.innerHTML = this.renderProducts(
      controller.model.getProducts()
    );
    this.controller.model.addObserver(this);
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
