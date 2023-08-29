import { ProductModel } from '../models/product-model.js';
import { CartModel } from '../models/cart-model.js';
import { CartController } from '../controllers/cart-controller.js';
import { CheckoutView } from '../views/checkout-view.js';

function main() {
  let productModel = new ProductModel();
  let cartModel = new CartModel(productModel);
  let cartController = new CartController(cartModel);
  let checkoutView = new CheckoutView(cartController);
}

main();
