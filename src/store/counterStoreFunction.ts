import { makeObservable, observable, action, computed, observe } from "mobx";

export const counterStoreFunction = () => {
  return makeObservable(
    {
      count: 0,
      get color() {
        return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
      },
      decrement() {
        this.count--;
      },
      increment() {
        this.count++;
      },
    },
    {
      count: observable,
      decrement: action.bound,
      increment: action.bound,
    }
  );
};
