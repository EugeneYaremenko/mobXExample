import React, { Component } from "react";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
// store
import { CounterStoreClass } from "../../store";

const store = new CounterStoreClass();

export type CounterClassProps = {
  initialCount: number;
};

const CounterClass = observer(
  class extends Component<CounterClassProps> {
    componentDidMount() {
      // store.count = this.props.initialCount ?? 0;
      runInAction(() => {
        store.count = this.props.initialCount ?? 0;
      });
    }

    render() {
      return (
        <div>
          <span>CounterClass</span>
          <button onClick={store.decrement}>-</button>
          <span style={{ color: store.color }}>{store.count}</span>
          <button onClick={store.increment}>+</button>
        </div>
      );
    }
  }
);

export default CounterClass;

// import React, { Component } from "react";
// import { observer } from "mobx-react";
// import { makeObservable, observable, action, computed } from "mobx";

// export type CounterClassProps = {
//   initialCount: number;
// };

// const CounterClass = observer(
//   class extends Component<CounterClassProps> {
//     count: number = 0;

//     get color() {
//       return this.count > 0 ? "green" : this.count < 0 ? "red" : "black"; // computed property
//     }

//     constructor(props: CounterClassProps) {
//       super(props);
//       makeObservable(this, {
//         count: observable,
//         color: computed, // computed property
//         decrement: action,
//         increment: action,
//       });
//       this.count = this.props.initialCount ?? 0;
//     }

//     increment = () => {
//       this.count++;
//     };

//     decrement = () => {
//       this.count--;
//     };

//     render() {
//       return (
//         <div>
//           <span>CounterClass</span>
//           <button onClick={this.decrement}>-</button>
//           <span style={{ color: this.color }}>{this.count}</span>
//           <button onClick={this.increment}>+</button>
//         </div>
//       );
//     }
//   }
// );

// export default CounterClass;
