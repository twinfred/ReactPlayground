import { useReducer, useState } from "react"

type CountState = {
  count: number;
}

enum CountAction {
  Decrement = "decrement",
  Increment = "increment",
}

const countReducer = (state: CountState, action: CountAction) => {
  switch (action) {
    case CountAction.Increment:
      return { count: state.count + 1 };
    case CountAction.Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

type ToDo = {
  id: number;
  name: string;
  complete: boolean;
}

enum TodoAction {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE,
}

type TodoReducerAction = {
  type: TodoAction;
  payload: { id?: number, name: string };
}

const createNewTodo = (name: string) => {
  return {
    id: Date.now(), name, complete: false
  }
}

const todoReducer = (todos: ToDo[], action: TodoReducerAction) => {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return [...todos, createNewTodo(action.payload.name)]
    case TodoAction.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }

        return todo;
      })
    case TodoAction.DELETE:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

export const UseReducerContainer = () => {
  const [countState, countDispatch] = useReducer(countReducer, { count: 0 });
  const [todoState, todoDispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    todoDispatch({ type: TodoAction.ADD_TODO, payload: { name } })
    setName("");
  }

  console.log(todoState)

  return (
    <>
      <section>
        <h2>5. Playing around with useReducer for a simple counter</h2>
        <button onClick={() => countDispatch(CountAction.Decrement)}>-</button>
        <p>{countState.count}</p>
        <button onClick={() => countDispatch(CountAction.Increment)}>+</button>
      </section>
      <section>
        <h2>6. Playing around with useReducer for a To Do List</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <input type="submit" value="Add ToDo" />
        </form>
        {todoState.map(todo => <ToDoItem key={todo.id} todo={todo} todoDispatch={todoDispatch} />)}
      </section>
    </>
  )
}

const ToDoItem = ({ todo, todoDispatch }: { todo: ToDo, todoDispatch: React.Dispatch<TodoReducerAction> }) => {
  return <p>
    {!todo.complete ?
      <span style={{ color: "red" }}>To Do:</span> :
      <span style={{ color: "green" }}>Completed:</span>}{" "}
    {todo.name}{" "}
    <button
      onClick={() => todoDispatch({ type: TodoAction.TOGGLE_TODO, payload: todo })}
    >
      {!todo.complete ? "Mark Completed" : "Reopen Task"}
    </button>
    <button onClick={() => todoDispatch({ type: TodoAction.DELETE, payload: todo })}>Delete</button>
  </p>
}