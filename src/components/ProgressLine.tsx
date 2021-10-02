import React, {useEffect, useState} from "react"
import {ITodo} from "../intefaces"

interface ITodoItem {
    todoList: ITodo[]
    label: string
    id: number
}

interface IProgressLine {
    todos: ITodoItem
}

const ProggresLine: React.FC<IProgressLine> = ({todos}) => {

    const [PrWidth, setWidth] = useState(0);

    useEffect(() => {
        lineHandler(todos.todoList)
    }, [todos])

    const lineHandler = (todos: ITodo[]) => {
        let todoCompleted = 0
        todos.forEach(todo => {
            if (todo.completed) {
                todoCompleted++
            }
        })
        let width = Math.floor((todoCompleted / todos.length) * 100)
        if (todos.length === 0) {
            setWidth(0)
        } else {
            setWidth(width)
        }
    }


    return (
        <div className="container">
            <h5 style={{marginTop: 40}} className="center">Выполнение: </h5>
            <div className="progressWrap">
                <span>
                        {PrWidth}%
                </span>
                <div style={{width: `${PrWidth}%`}} className="progressLine center center-justify align-center center-align">

                </div>
            </div>
        </div>
    )
}

export default ProggresLine