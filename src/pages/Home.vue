<script setup>
import Trending from '../components/Trending.vue';
import Movies from '../components/Movies.vue';
import {useMoviesStore} from '../stores/movies'

const moviesStore = useMoviesStore()
</script>

<template>
    <div class="home">
        <div>
            <Trending :movies="moviesStore.tranding" />
        </div>
        <div>
            <Movies 
                :movies="moviesStore.recomended"
                :title="moviesStore.searchQuery ? `Found ${moviesStore.recomended.length} results for ‘${moviesStore.searchQuery}’` : 'Recommended for you'"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.home{
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 768px) {
        gap: 40px;
    }
}
</style>