/*

How to implement Event Emitter in JavaScript

*/

export class Emitter {
  private events = new Map<string, Function[]>();

  addEventListener(event: string, cb: Function) {
    let eventObj = this.events.get(event);
    eventObj ? eventObj.push(cb) : this.events.set(event, [cb]);
  }

  removeAllEventListener(event: string) {
    if (this.events.has(event)) this.events.delete(event);
  }

  removeEventListener(event: string, cb: Function) {
    let callbacks = this.events.get(event);
    if (!callbacks || callbacks.length === 0) return;
    let index = callbacks.findIndex((fn) => fn === cb);
    if (index === -1) return;
    callbacks.splice(index, 1);
  }

  once(event: string, cb: Function) {
    let fn = (...args: any[]) => {
      cb(...args);
      this.removeEventListener(event, fn);
    };
    this.addEventListener(event, fn);
  }

  emit(event: string, ...args: any) {
    let callbacks = this.events.get(event);
    if (!callbacks || callbacks.length === 0) return;
    callbacks.forEach((cb) => {
      cb(...args);
    });
  }

  listenerCount(event: string) {
    let callbacks = this.events.get(event);
    return callbacks ? callbacks.length : 0;
  }

  rawListeners(event: string) {
    let callbacks = this.events.get(event);
    return callbacks || null;
  }
}

let emitter = new Emitter();
let one = (...args: any[]) => console.log(args, "status one");
let two = (...args: any[]) => console.log(args, "status two");
emitter.addEventListener("status", one);
emitter.addEventListener("status", two);
emitter.once("newMessage", (...args: any[]) =>
  console.log("emitter once", args)
);
console.log(emitter.rawListeners("status"));
console.log(emitter.listenerCount("newMessage"));
emitter.emit("status", true, { name: "John" });
emitter.removeEventListener("status", one);
emitter.emit("newMessage", [1, 2], { name: "Aswin" });
emitter.emit("status", true, { name: "John" });
console.log(emitter.listenerCount("newMessage"));
