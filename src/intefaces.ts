export interface ITodo {
    title: string
    id: number
    completed: boolean
}

export interface ITodoItem {
    todoList: ITodo[]
    label: string
    id: number
}