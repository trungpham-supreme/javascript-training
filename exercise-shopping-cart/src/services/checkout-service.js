import { CartModel } from '../models/cart-model.js';
import { CheckoutController } from '../controllers/checkout-controller.js';
import { CheckoutView } from '../views/checkout-view.js';

function main() {
  let cartModel = new CartModel();
  let checkoutController = new CheckoutController(cartModel);
  let checkoutView = new CheckoutView(checkoutController);
}

main();
