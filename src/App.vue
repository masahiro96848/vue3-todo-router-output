<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <section class="container-area">
        <header class="header">
            <button class="nav-button">Top</button>
            <button class="nav-button">Create</button>
        </header>
        <main>
            <h1 class="title">Todo List</h1>
            <RouterView />
        </main>
    </section>
</template>

<style scoped></style>
