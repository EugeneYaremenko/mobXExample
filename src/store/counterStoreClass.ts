import {
  makeObservable,
  observable,
  action,
  computed,
  makeAutoObservable,
} from "mobx";
// reactions
import { autorun, when, reaction } from "mobx";

export class CounterStoreClass {
  count: number = 0;

  get color() {
    return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
  }

  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   color: computed,
    //   decrement: action,
    //   increment: action,
    // });
    makeAutoObservable(this, {
      // options
      increment: action.bound,
    });
    // ------------reactions-----------------------------
    // autorun(() => console.log(`count: ${this.count}`));
    // when(
    //   () => this.count > 5,
    //   () => console.log(`${this.count} > 5`)
    // );
    // reaction(
    //   () => this.count,
    //   (count, prevCount) => {
    //     console.log(`prevCount: ${prevCount} count: ${count}`);
    //   }
    // );
    // --------------destroy reaction--------------------
    // const desposer = reaction(
    //   () => this.count,
    //   (count, prevCount) => {
    //     console.log(`prevCount: ${prevCount} count: ${count}`);

    //     if (count > 5) {
    //       desposer();
    //     }
    //   }
    // );
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}
