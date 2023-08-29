import Observable from './observable.js';

class ProductModel extends Observable {
  constructor() {
    super();
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
}

export { ProductModel };
