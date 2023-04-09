import { observer } from "mobx-react-lite";
import todo from "../store/todo";
import React from "react";

const Todo = observer(() => {
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>fetch todos</button>
            {todo.todos.map((item) => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => todo.completeTodo(item.id)}
                    ></input>
                    {item.title}
                    <button onClick={() => todo.removeTodo(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
});

export default Todo;
