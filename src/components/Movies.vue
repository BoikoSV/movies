<script setup>
import Card from './Card.vue'
const props = defineProps(['movies', 'title'])
</script>

<template>
    <div class="movies">
        <h3 class="title">{{ title }}</h3>
        <div class="movies-list">
            <Card v-for="movie in movies" :key="movie.id"
                    :year="movie.year"
                    :type="movie.type"
                    :rating="movie.rating"
                    :is-favorite="movie.bookmarked"
                    :title="movie.title"
                    :poster="`images/${movie.image}`"
                    :id="movie.id"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.movies{
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 1366px) {
        gap: 32px;
    }
}
.title{
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;

    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
    }
}
.movies-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 29px;
        row-gap: 24px;
    }

    @media (min-width: 1366px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 40px;
        row-gap: 32px;
    }
}
</style>