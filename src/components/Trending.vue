<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper'
import Card from './Card.vue'
import 'swiper/css';
import 'swiper/css/navigation';
const props = defineProps(['movies'])

const modules = [Autoplay, Navigation]

const breakpoints = {
        350: {       
            slidesPerView: 2,
            spaceBetween: 16     
        },          
      768: {       
         slidesPerView: 2,       
         spaceBetween: 40     
      },   
  
      1000: {       
         slidesPerView: 3,       
         spaceBetween: 30     
      },
      1366: {       
         slidesPerView: 4,       
         spaceBetween: 30     
      },
      2000: {       
         slidesPerView: 5,       
         spaceBetween: 30     
      },
}
</script>

<template>
    <div class="trending">
        <h3 class="title">Trending</h3>
        <swiper
            :modules="modules"
            :slides-per-view="slidePerPage"
            :space-between="16"
            navigation
            
            @swiper="onSwiper"
            :breakpoints="breakpoints"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="movie in movies" :key="movie.id">
                <Card
                    :slider-item="true"
                    :year="movie.year"
                    :type="movie.type"
                    :rating="movie.rating"
                    :is-favorite="movie.bookmarked"
                    :title="movie.title"
                    :poster="`/images/${movie.image}`"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped lang="scss">
.title{
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 25px;
    }
}

</style>