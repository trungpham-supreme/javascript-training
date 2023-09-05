import { ProductModel } from '../models/product-model.js';
import { ProductController } from '../controllers/product-controller.js';
import { ProductView } from '../views/product-view.js';


function main() {
  let productModel = new ProductModel();
  let productController = new ProductController(productModel);
  let productView = new ProductView(productController);
}

main();
