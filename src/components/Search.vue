<script setup>
import {useMoviesStore} from '../stores/movies'
import {useRoute} from 'vue-router'
const route = useRoute();
const moviesStore = useMoviesStore()
</script>

<template>
    <form class="form" @submit.prevent="">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
        <input v-model="moviesStore.searchQuery" class="input" type="text" :placeholder="route.meta.placeholder">
    </form>
</template>

<style scoped lang="scss">
.form{
    display: flex;
    gap: 16px;
    
    @media (min-width: 768px) {
        gap: 24px;
    }
}
.input{
    flex-grow: 1;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    background-color: transparent;
    outline: none;
    border: none;

    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 30px;
    }

    @media (min-width: 1366px) {
        padding-bottom: 10px;
    }
}
.input:focus{

    @media (min-width: 1366px) {
        border-bottom: 1px solid #5A698F;
    }
}
.input::placeholder{
    color: rgba(255, 255, 255, 0.5);
}
</style>