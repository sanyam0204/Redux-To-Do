import { useState } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
