class ProductData {
  constructor() {
    this.products = [
      { id: 0, name: 'coffee', price: 1000, quantity: 0 },
      { id: 1, name: 'boba tea', price: 1500, quantity: 0 },
      { id: 2, name: 'milk tea', price: 1200, quantity: 0 },
      { id: 3, name: 'smoothie', price: 2000, quantity: 0 },
      { id: 4, name: 'matcha', price: 1000, quantity: 0 },
    ];
  }

  saveProductsToStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getAllProducts() {
    return this.products;
  }
}

const productData = new ProductData();

const allProducts = productData.getAllProducts();

productData.saveProductsToStorage();
