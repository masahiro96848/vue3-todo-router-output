import { ref } from 'vue'

export const useInputValue = () => {
    const titleValue = ref('')
    const contentValue = ref('')

    return {
        titleValue,
        contentValue,
    }
}
