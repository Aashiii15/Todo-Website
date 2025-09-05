import React, { useState } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && tempText.trim() !== "") {
      editTodo(todo.id, tempText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      )}
      <div className="actions">
        <button onClick={handleEdit}>{isEditing ? "💾" : "✏️"}</button>
        <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
      </div>
    </li>
  );
}

export default TodoItem;
