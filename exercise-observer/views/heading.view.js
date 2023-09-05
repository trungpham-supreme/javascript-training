import Observer from './observer.js';

class HeadingView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.heading = document.getElementById('heading');
    this.heading.innerText = controller.model.heading;
    this.heading.addEventListener('click', controller);
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.heading.classList.add('colorGreen');
    this.heading.innerText = model.heading;
  }
}

export { HeadingView };
