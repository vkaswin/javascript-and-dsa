type PromiseState = "pending" | "fulfilled" | "rejected";

const STATES = {
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
  PENDING: "pending",
} as const;

export class MyPromise {
  private thenCbs: Function[] = [];
  private catchCbs: Function[] = [];
  private finallyCb?: Function = undefined;
  private value: any = undefined;
  private state: PromiseState = STATES.PENDING;

  constructor(executor: (resolve: Function, reject: Function) => void) {
    try {
      executor(this.onSuccess.bind(this), this.onFail.bind(this));
    } catch (error) {
      this.onFail(error);
    }
  }

  private onSuccess(value?: any) {
    queueMicrotask(() => {
      if (this.state !== STATES.PENDING) return;

      this.value = value;
      this.state = "fulfilled";
      this.runCallBacks();
    });
  }

  private onFail(value?: any) {
    queueMicrotask(() => {
      if (this.state !== STATES.PENDING) return;

      this.value = value;
      this.state = "rejected";
      this.runCallBacks();
    });
  }

  private runCallBacks() {
    for (let fn of this.state === "fulfilled" ? this.thenCbs : this.catchCbs) {
      this.value = fn(this.value) || this.value;
    }

    if (typeof this.finallyCb === "function") this.finallyCb();
  }

  then(successCb?: Function, errorCb?: Function) {
    if (successCb) this.thenCbs.push(successCb);
    if (errorCb) this.catchCbs.push(errorCb);
    this.runCallBacks();
    return this;
  }

  catch(cb?: Function) {
    return this.then(undefined, cb);
  }

  finally(cb: Function) {
    this.finallyCb = cb;
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => reject("resolved"), 2000);
});

promise.catch().catch();
