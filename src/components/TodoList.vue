<template>
    <div class="container">
        <TodoItem />
    </div>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useFilterValue } from '../composables/useFilterValue'

const { filterTodoItems } = useFilterValue()
</script>
