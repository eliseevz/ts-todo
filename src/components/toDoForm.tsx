import React, {useState, useRef} from "react"

interface TodoFromProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFromProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
        }
    }

    const onSubmit = (event: React.MouseEvent) => {
        event.stopPropagation()
        props.onAdd(ref.current!.value)
        ref.current!.value = ""
    }

    return (
        <div className="input-field mt2">
            <div style={{display: "flex"}} className="display-flex">
                <input
                    ref={ref}
                    type="text" id="title"
                    placeholder="Сходить за хлебом"
                    onKeyPress={keyPressHandler}
                />
                <button type="submit" onClick={onSubmit} className="btn btn-primary">+</button>
            </div>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}

export default TodoForm