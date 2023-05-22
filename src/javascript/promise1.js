const STATES = {
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  thenCbs = [];
  catchCbs = [];
  finallyCb = undefined;
  value = undefined;
  state = STATES.PENDING;

  constructor(cb) {
    try {
      cb(this.onSuccess.bind(this), this.onFail.bind(this));
    } catch (error) {
      this.onFail(error);
    }
  }

  onSuccess(value) {
    queueMicrotask(() => {
      if (this.state !== STATES.PENDING) return;

      this.value = value;
      this.state = "fulfilled";
      this.runCallBacks();
    });
  }

  onFail(value) {
    queueMicrotask(() => {
      if (this.state !== STATES.PENDING) return;

      this.value = value;
      this.state = "rejected";
      this.runCallBacks();
    });
  }

  runCallBacks() {
    for (let fn of this.state === "fulfilled" ? this.thenCbs : this.catchCbs) {
      this.value = fn(this.value);
    }

    if (typeof this.finallyCb === "function") this.finallyCb();
  }

  then(successCb, errorCb) {
    if (successCb) this.thenCbs.push(successCb);
    if (errorCb) this.catchCbs.push(errorCb);
    this.runCallBacks();
    return this;
  }

  catch(cb) {
    return this.then(undefined, cb);
  }

  finally(cb) {
    this.finallyCb = cb;
  }
}

module.exports = MyPromise;
