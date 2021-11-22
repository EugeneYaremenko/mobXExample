import React, { FC, useEffect } from "react";
import { observer } from "mobx-react";
import { runInAction, autorun } from "mobx";
// store
import { counterStoreFunction } from "../../store";

const store = counterStoreFunction();

// autorun(() => console.log(`color: ${store.color}`));

type CounterClassProps = {
  initialCount: number;
};

const CounterFunction: FC<CounterClassProps> = observer(({ initialCount }) => {
  useEffect(() => {
    runInAction(() => {
      store.count = initialCount ?? 0;
    });
  }, [initialCount]);

  return (
    <div>
      <span>CounterFunction</span>
      <button onClick={store.decrement}>-</button>
      <span style={{ color: store.color }}>{store.count}</span>
      <button onClick={store.increment}>+</button>
    </div>
  );
});

export default CounterFunction;

// import React, { FC } from "react";
// import { observer, useLocalObservable, Observer } from "mobx-react";

// // const CounterFunction: FC<CounterClassProps> = observer(({ initialCount }) => {
// const CounterFunction: FC<CounterClassProps> = ({ initialCount }) => {
//   //  const { count, decrement, increment } = store;

//   const store = useLocalObservable(() => {
//     return {
//       count: initialCount ?? 0,
//       get color() {
//         return this.count > 0 ? "green" : this.count < 0 ? "red" : "black"; // computed property
//       },
//       decrement() {
//         this.count--;
//       },
//       increment() {
//         this.count++;
//       },
//     };
//   });

//   return (
//     <div>
//       <span>CounterFunction</span>
//       <button onClick={store.decrement}>-</button>
//       <Observer>
//         {() => <span style={{ color: store.color }}>{store.count}</span>}
//       </Observer>
//       <button onClick={store.increment}>+</button>
//     </div>
//   );
// };

// export default CounterFunction;

// ---------------------default function---------------------------------
// const CounterFunction: FC<CounterClassProps> = ({ initialCount }) => {
//     const [count, setCount] = useState(initialCount ?? 0);

//     const increment = () => {
//       setCount((prevCount) => prevCount + 1);
//     };

//     const decrement = () => {
//       setCount((prevCount) => prevCount - 1);
//     };

//     return (
//       <div>
//         <span>CounterFunction</span>
//         <button onClick={decrement}>-</button>
//         <span>{count}</span>
//         <button onClick={increment}>+</button>
//       </div>
//     );
//   };

//   export default CounterFunction;
