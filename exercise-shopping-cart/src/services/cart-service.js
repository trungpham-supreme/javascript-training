import { CartView } from '../views/cart-view.js';
import { CartModel } from '../models/cart-model.js';
import { CartController } from '../controllers/cart-controller.js';

function main() {
  let cartModel = new CartModel();
  let cartController = new CartController(cartModel);
  let cartView = new CartView(cartController);
}

main();
