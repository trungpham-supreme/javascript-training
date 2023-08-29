import Observable from './observable.js';

class ProductModel extends Observable {
  constructor() {
    super();
    this.products = [
      { id: 0, name: 'coffee', price: 1000, quantity: 5 },
      { id: 1, name: 'boba tea', price: 1500, quantity: 7 },
      { id: 2, name: 'milk tea', price: 1200, quantity: 10 },
      { id: 3, name: 'smoothie', price: 2000, quantity: 4 },
      { id: 4, name: 'matcha', price: 1000, quantity: 5 },
    ];
  }

  decreaseProduct(index) {
    let productQuantity = this.products[parseInt(index)].quantity;
    if (productQuantity > 0) {
      this.products[parseInt(index)].quantity -= 1;
      localStorage.setItem('products', JSON.stringify(this.products));
    } else {
      alert('The product is out of stock!');
    }
  }

  getProducts() {
    return this.products;
  }
}

export { ProductModel };
