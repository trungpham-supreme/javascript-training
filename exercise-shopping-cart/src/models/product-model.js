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
    return this.products;
  }
}

export { ProductModel };
