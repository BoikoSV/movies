<script setup>
import Movies from '../components/Movies.vue';
import {useMoviesStore} from '../stores/movies'

const moviesStore = useMoviesStore()
// const moviesList = [
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },
//     {
//         sliderItem: false,
//         year: 2019,
//         type: 'movie',
//         rating: 'PG',
//         isFavorite: false,
//         title: 'Beyond Earth',
//         poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
//     },

// ]
</script>

<template>
    <div class="series">
        <div>
            <Movies 
                :movies="moviesStore.series"
                :title="moviesStore.searchQuery ? `Found ${moviesStore.series.length} results for ‘${moviesStore.searchQuery}’` : 'TV Series'"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>