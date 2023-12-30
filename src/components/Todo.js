import {
  faCheckSquare,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todo({ todo, editTodo, toggleComplete, deleteTodo }) {
  return (
    <div className="Todo">
      <p className={todo.completed ? "completed" : ""}>{todo.task}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
        <FontAwesomeIcon
          icon={faCheckSquare}
          onClick={() => toggleComplete(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
