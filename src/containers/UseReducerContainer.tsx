import { useReducer } from "react"

type State = {
  count: number;
}

enum Action {
  Decrement = "decrement",
  Increment = "increment",
}

const reducer = (state: State, action: Action) => {
  switch (action) {
    case Action.Increment:
      return { count: state.count + 1 };
    case Action.Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const UseReducerContainer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <section>
      <h2>5. Playing around with useReducer for a simple counter</h2>
      <button onClick={() => dispatch(Action.Decrement)}>-</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch(Action.Increment)}>+</button>
    </section>
  )
}