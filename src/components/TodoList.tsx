import React from "react"
import {ITodo} from "../intefaces"

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {


    if (todos.length === 0) {
        return (<p className="center">Пока дел нет</p>)
    }

    const removeHandler = (event: React.MouseEvent,id: number): void => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ["todo"]
                if (todo.completed) {
                    classes.push("completed")
                }
                return (
                    <li className={classes.join(" ")} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span> {todo.title} </span>
                            <i
                                className="material-icons red-text"
                                onClick={(e) => removeHandler(e, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}