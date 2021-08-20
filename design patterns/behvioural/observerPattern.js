function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

const logger = (message) => {
  console.log(message);
};

window.onload = (event) => {
  const btn = document.getElementById("button");
  const input = document.getElementById("input");

  const click = new Click();

  btn.addEventListener("click", (ev) => {
    click.fire(input.value);
  });

  click.subscribe(logger);
};
