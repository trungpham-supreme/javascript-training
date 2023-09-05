import Observable from "./observable.js";

class HeadingModel extends Observable {
  constructor() {
    super();
    this.heading = "Hello";
  }
}

export { HeadingModel };
