import Observable from './observable.js';

class ProductModel extends Observable {
  constructor() {
    super();
    this.products = this.getProducts();
  }

  decreaseProduct(index) {
    const parsedIndex = parseInt(index);

    if (
      isNaN(parsedIndex) ||
      parsedIndex < 0 ||
      parsedIndex >= this.products.length
    ) {
      console.error('Invalid index:', index);
      return;
    }

    const product = this.products[parsedIndex];
    if (product.quantity > 0) {
      product.quantity--;
      localStorage.setItem('products', JSON.stringify(this.products));
    } else {
      alert('The product is out of stock!');
    }
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
}

export { ProductModel };
