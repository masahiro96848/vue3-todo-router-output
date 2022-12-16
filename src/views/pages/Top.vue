<template>
    <header class="header">
        <RouterLink class="nav-button" :to="{ name: 'Top' }">Top</RouterLink>

        <RouterLink class="nav-button" :to="{ name: 'CreateTodo' }"
            >Create</RouterLink
        >
    </header>
    <h1 class="title">Todo List</h1>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
