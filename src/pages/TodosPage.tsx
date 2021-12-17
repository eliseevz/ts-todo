import React, {useState, useEffect}  from "react"
import TodoForm from "../components/toDoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../intefaces";
import ProggresLine from "../components/ProgressLine";
import List from "../components/List"
import TodoName from "../components/todoName";

declare var confirm: (question: string) => boolean

interface ITodoItem {
    todoList: ITodo[]
    label: string
    id: number
}

export const TodosPage: React.FC = () => {

    const [todoItems, setTodoItem] = useState<ITodoItem[]>([{todoList: [], label: "Сегодня", id: 0}])
    const [todos, setTodos] = useState<ITodoItem>(todoItems[0])

    useEffect( () => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodoItem[]
        setTodoItem(saved)
        setTodos(saved[0])

    }, [])

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todoItems))
    }, [todoItems])

    useEffect(()=> {
        console.log("изменем")
        setTodoItem(prev => {
            return prev.map(item => {
                if (item.id === todos.id) {
                    return todos
                }
                return item
            })
        })
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        if (title.length === 0 ) {
            alert("Строчка не должна быть пустой")
            return
        }
        setTodos((prev) => {
            setTodoItem(prevState => {
                const newTodoItems = prevState.map(item => {
                    if (todos.id == item.id) {
                        return {...prev, todoList: [newTodo, ...prev.todoList]}
                    }
                    return item
                })
                return newTodoItems
            })
            return {...prev, todoList: [newTodo, ...prev.todoList]}
        })

    }

    const onToggleHandler = (id: number) => {
        setTodos(prev => {
            const newTodo = prev.todoList.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            setTodoItem(prevState => {
                const newTodoItems = prevState.map(item => {
                    if (todos.id === item.id) {
                        return {...prev, todoList: [...newTodo]}
                    }
                    return {...item}
                })
                return newTodoItems
            })
            return {...prev, todoList: newTodo}
        })

    }

    const RemoveHandler = (id: number) => {
        const shouldRemove = confirm("Вы уверены, что хотите удалить элемент?")
        if (shouldRemove) {
            setTodos(prev => {
                const newTodos = prev.todoList.filter(todo => todo.id !== id)

                setTodoItem(prevState => {
                    const newTodoItems = prevState.map(item => {
                        if (todos.id === item.id) {
                            return {...prev, todoList: newTodos}
                        }
                        return item
                    })
                    return newTodoItems
                })

                return {...prev, todoList: newTodos}
            })

        }
    }

    const onNewTodo = async () => {
        await setTodoItem(prev => {
            return [...prev, {todoList: [], label: `Задачи #${prev.length}`, id: Math.random()}]
        })
    }

    const onChangeTodo = (id: number) => {
        todoItems.forEach(item => {
            if (item.id === id) {
                console.log("setted")
                setTodos({...item})
            }
        })
    }

    const onDeleteTodo = (id: number) => {
        if (todos.id === id) {
            setTodos(todoItems[0])
        }
        const newTodoItems = todoItems.filter(item => item.id !== id)
        setTodoItem(newTodoItems)
    }

    return (
        <div style={{display: "flex", marginTop: 30}} className="container">
            <List todoItems={todoItems} todos={todos} onNewTodo={onNewTodo} onChange={onChangeTodo} onDelete={onDeleteTodo}/>
            <div style={{width: "100%"}} className="todoMain">
                <TodoName
                    todos={todos}
                    setChange={setTodos}
                />
                <TodoForm
                    onAdd={addHandler}
                />
                <TodoList
                    todos={todos}
                    onToggle={onToggleHandler}
                    onRemove={RemoveHandler}
                />
                <ProggresLine
                    todos={todos}
                />
            </div>
        </div>
    )
}