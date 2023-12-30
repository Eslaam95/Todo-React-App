import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  function updateTodoList(todo) {
    setTodos([
      { id: uuidv4(), task: todo, completed: false, editing: false },
      ...todos,
    ]);
    console.log("tododddddds", todos);
  }

  function editTodo(id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, editing: !item.editing } : item
      )
    );
  }

  function updateTodo(value, id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, task: value, editing: !item.editing } : item
      )
    );
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm updateTodoList={updateTodoList} />
      {todos.length > 0 ? (
        todos.map((item, index) => {
          if (item.editing) {
            return <EditTodoForm oldTask={item} updateTodo={updateTodo} />;
          } else {
            return (
              <Todo
                todo={item}
                key={index}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            );
          }
        })
      ) : (
        <p className="ph">No tasks yet!</p>
      )}
    </div>
  );
}

export default TodoWrapper;
