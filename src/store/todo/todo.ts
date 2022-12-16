import { reactive, readonly } from 'vue'
import type { InjectionKey } from 'vue'

// Todoの型を定義
type TodoState = {
    todoItems: {
        id: number
        title: string
        content: string
    }[]
}

export const todoState = () => {
    // 管理したいTodoを定義
    const state = reactive<TodoState>({
        todoItems: [],
    })

    // Todoを追加
    const addTodo = (value: string) => {
        if (!value) {
            alert('値が入力されていません')
            return
        }
        state.todoItems = state.todoItems = [
            ...state.todoItems,
            {
                id: state.todoItems.length + 1,
                title: value,
                content: value,
            },
        ]
    }

    return {
        state: readonly(state),
        addTodo,
    }
}

// stateの型を生成
export type todoStateType = ReturnType<typeof todoState>

// provideメソッドに指定するInjectKeyを指定
export const todoStateKey: InjectionKey<todoStateType> = Symbol('todoState')
