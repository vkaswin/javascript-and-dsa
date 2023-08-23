const STATES = {
  FULLFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  thenCbs = [];
  catchCbs = [];
  finallyCb = undefined;
  state = STATES.PENDING;
  value = undefined;

  constructor(cb) {
    try {
      cb(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  runCallBacks() {
    if (this.state === STATES.FULLFILLED) {
      this.thenCbs.forEach((cb) => {
        cb(this.value);
      });

      this.thenCbs = [];
    }

    if (this.state === STATES.REJECTED) {
      this.catchCbs.forEach((cb) => {
        cb(this.value);
      });

      this.catchCbs = [];
    }

    if (this.finallyCb) {
      this.finallyCb();
      this.finallyCb = undefined;
    }
  }

  resolve(value) {
    queueMicrotask(() => {
      this.value = value;
      this.state = STATES.FULLFILLED;
      this.runCallBacks();
    });
  }

  reject(error) {
    queueMicrotask(() => {
      this.value = error;
      this.state = STATES.REJECTED;
      this.runCallBacks();
    });
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.thenCbs.push((result) => {
        try {
          resolve(thenCb ? thenCb(result) : result);
        } catch (error) {
          reject(error);
        }
      });

      this.catchCbs.push((error) => {
        if (thenCb && !catchCb) {
          reject(error);
          return;
        }

        try {
          resolve(catchCb ? catchCb(error) : error);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  catch(catchCb) {
    return this.then(undefined, catchCb);
  }

  finally(onFinally) {
    if (!onFinally || this.finallyCb) return;
    this.finallyCb = onFinally;
  }

  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }

  static reject(error) {
    return new Promise((_, reject) => {
      reject(error);
    });
  }

  static allSettled(promises) {
    let result = [];

    return new Promise((resolve) => {
      let thenCb = (value) => {
        result.push({ value, status: STATES.FULLFILLED });
        checkResolved();
      };

      let catchCb = (error) => {
        result.push({ reason: error, status: STATES.REJECTED });
        checkResolved();
      };

      let checkResolved = () => {
        if (result.length === promises.length) resolve(result);
      };

      promises.forEach((promise) => {
        promise.then(thenCb).catch(catchCb);
      });
    });
  }

  static all(promises) {
    let result = [];

    return new Promise((resolve, reject) => {
      let thenCb = (value) => {
        result.push(value);
        if (result.length === promises.length) resolve(result);
      };

      promises.forEach((promise) => {
        promise.then(thenCb).catch(reject);
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }

  static any(promises) {
    let failedPromises = 0;

    return new Promise((resolve, reject) => {
      let catchCb = () => {
        failedPromises++;
        if (failedPromises === promises.length)
          reject(new AggregateError("All promises were failed"));
      };

      promises.forEach((promise) => {
        promise.then(resolve).catch(catchCb);
      });
    });
  }
}

module.exports = MyPromise;
