import { useState } from "react";

function EditTodoForm({ updateTodo, oldTask }) {
  const [value, setValue] = useState("");
  function handleSubmit(e, id) {
    e.preventDefault();
    if (value !== "") updateTodo(value, oldTask.id);
    setValue("");
  }
  return (
    <div className="Todoform" onSubmit={handleSubmit}>
      <form>
        <input
          className="todo-input"
          type="text"
          defaultValue={oldTask.task}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditTodoForm;
