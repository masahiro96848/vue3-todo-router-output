<template>
    <div class="container">
        <section class="container-area">
            <main>
                <RouterView />
            </main>
        </section>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
