import { ProductModel } from '../models/product-model.js';
import { CartModel } from '../models/cart-model.js';
import { ProductController } from '../controllers/product-controller.js';
import { CartController } from '../controllers/cart-controller.js';
import { ProductView } from '../views/product-view.js';
import { CartView } from '../views/cart-view.js';

function main() {
  let productModel = new ProductModel();
  let cartModel = new CartModel(productModel);
  let productController = new ProductController(productModel);
  let cartController = new CartController(cartModel);
  let productView = new ProductView(productController, cartController);
  let cartView = new CartView(cartController);
}

main();
