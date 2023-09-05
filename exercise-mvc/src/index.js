import { HeadingModel } from '../models/heading.model.js';
import { HeadingController } from '../controllers/heading.controller.js';
import { HeadingView } from '../views/heading.view.js';

function main() {
  let model = new HeadingModel();
  let controller = new HeadingController(model);
  let view = new HeadingView(controller);
}

main();
