import Observer from './observer.js';

class TextView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.text = document.getElementById('text');
    this.text.innerText = controller.model.heading;
    this.controller.model.addObserver(this);
  }

  update(model) {
    this.text.classList.add('colorGreen');
    this.text.innerText = model.heading;
  }
}

export { TextView };
