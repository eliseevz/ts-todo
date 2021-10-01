import React, {useState, useEffect}  from "react"
import TodoForm from "../components/toDoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../intefaces";

declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
        setTodos(saved)

    }, [])

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos((prev) => [newTodo, ...prev])
    }

    const onToggleHandler = (id: number) => {
        console.log("хуй")
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const RemoveHandler = (id: number) => {
        const shouldRemove = confirm("Вы уверены, что хотите удалить элемент?")
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }


    return (
        <div className="container">
            <TodoForm
                onAdd={addHandler}
            />
            <TodoList
                todos={todos}
                onToggle={onToggleHandler}
                onRemove={RemoveHandler}
            />
        </div>
    )
}