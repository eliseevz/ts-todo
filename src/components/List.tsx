import React from "react"
import {ITodo, ITodoItem} from "../intefaces"

interface IListProps {
    todoItems: ITodoItem[]
    todos: ITodoItem
    onNewTodo: () => any
    onChange: (id: number) => any
    onDelete: (id: number) => any
}

const List: React.FC<IListProps> = ({todoItems, onNewTodo, todos, onChange, onDelete}) => {

    const onClikcHandler = (event:React.MouseEvent<HTMLSpanElement>, id: number, isClose: boolean = false) => {
        event.preventDefault()
        event.stopPropagation()
        console.log(event.target)
        if (isClose) {
            const isDelete = window.confirm("Вы уверены?")
            if (isDelete) {
                onDelete(id)
            }
        } else {
            onChange(id)
        }
    }

    return (
        <div style={{width: 250, marginRight: 30, alignSelf: "end"}} className="collection">
            {
                todoItems.map((item, index) =>
                    <div className="listWrap">
                        <a
                            key={index}
                            className={`collection-item listItem ${item.id === todos.id ? "active" : ""}`}
                            onClick={(e)=>onClikcHandler(e, item.id)}
                        >
                            <span>{item.label}</span>
                            <span id="delete" onClick={(e)=> onClikcHandler(e, item.id, true)} className="close">&times;</span>
                        </a>
                    </div>
                )
            }
            <a onClick={(event => {
                event.preventDefault()
                event.stopPropagation()
                onNewTodo()
            })}
               className="collection-item">+</a>
            {/*<a href="/" className="collection-item">Alvin</a>*/}
            {/*<a href="/" className="collection-item active">Alvin</a>*/}
            {/*<a href="/" className="collection-item">Alvin</a>*/}
            {/*<a href="/" className="collection-item">Alvin</a>*/}
        </div>
    )
}

export default List