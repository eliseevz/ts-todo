import React, {useState, useRef} from "react"

interface TodoFromProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFromProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    // const [title, setTitle] = useState<string>("")
    //
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
            // console.log(title)
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type="text" id="title"
                placeholder="Сходить за хлебом"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}

export default TodoForm