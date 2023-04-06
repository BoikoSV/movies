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

// const seriesList = [
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
    <div class="bookmarked">
        <div>
            <Movies 
                :movies="moviesStore.bookmarkedMovies"
                :title="moviesStore.searchQuery ? `Found ${moviesStore.bookmarkedMovies.length} results for ‘${moviesStore.searchQuery}’ in movies` : 'Bookmarked Movies'"
            />
        </div>
        <div>
            <Movies 
                :movies="moviesStore.bookmarkedSeries"
                :title="moviesStore.searchQuery ? `Found ${moviesStore.bookmarkedSeries.length} results for ‘${moviesStore.searchQuery}’ in series` : 'Bookmarked Series'"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.bookmarked{
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 768px) {
        gap: 40px;
    }
}
</style>