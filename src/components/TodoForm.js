import { useState } from "react";

function TodoForm({ updateTodoList }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (value !== "") updateTodoList(value);
    setValue("");
  }
  return (
    <div className="Todoform" onSubmit={handleSubmit}>
      <form>
        <input
          className="todo-input"
          type="text"
          placeholder="What's the new task?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <button type="submit" className="todo-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
