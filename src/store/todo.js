import { action, makeAutoObservable, observable } from "mobx";

class Todo {
    todos = [
        { id: 1, title: "123", completed: true },
        { id: 2, title: "Купить хлеба", completed: true },
        { id: 3, title: "Вернуться из магазина", completed: true },
    ];

    constructor() {
        makeAutoObservable(
            this,
            { todos: observable, addTodo: action },
            { deep: true }
        );
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = JSON.parse(
            JSON.stringify(this.todos.filter((todo) => todo.id !== id))
        );
    }

    completeTodo(id) {
        this.todos = JSON.parse(
            JSON.stringify(
                this.todos.map((todo) =>
                    todo.id === id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            )
        );
    }

    fetchTodos() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => (this.todos = [...this.todos, ...json]));
    }
}

const objectTodo = new Todo();

export default objectTodo;
