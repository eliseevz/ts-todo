import React, {useState} from "react"
import {ITodo} from "../intefaces";

interface ITodoItem {
    todoList: ITodo[]
    label: string
    id: number
}

interface ITodoName {
    setChange: (name: ITodoItem) => any
    todos: ITodoItem
}

const TodoName: React.FC<ITodoName> = ({todos,setChange}) => {

    const [name, setName] = useState({text: "", isFull: false})

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setName({text: event.target.value, isFull: false})
        setChange({...todos, label: event.target.value})
    }

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">mode_edit</i>
                        <input
                            value={todos?.label}
                            onChange={onChangeHandler}
                            id="icon_prefix2"
                            className="materialize-textarea"
                        />
                        <label htmlFor="icon_prefix2"></label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TodoName