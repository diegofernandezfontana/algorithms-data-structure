class Events {
  constructor() {
    this.events = {};
  }

  // register event handler
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  //trigger all events
  trigger(eventName) {
    if (!this.events[eventName]) {
      console.warn("There are no event's with this name: " + eventName);
      return;
    }
    this.events[eventName].forEach((callback) => {
      callback();
    });
  }

  //Remove all event handlers
  off(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
      console.log("Deleted event");
    } else {
      console.warn("No event associated with name: " + eventName);
    }
  }
}

const events = new Events();

events.on("other", (event) => {});
events.on("click", (event) => {
  console.log("I have been clicked");
});

events.on("click", (event) => {
  console.log("I am the 2nd callback");
});

events.trigger("click");
events.trigger("click");
events.trigger("click");
events.off("click"); // Remove all click events
events.trigger("click"); // Nothing happens
