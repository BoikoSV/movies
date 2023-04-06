<script setup>
import {useMoviesStore} from '../stores/movies'
const movieStore = useMoviesStore()
const props = defineProps(['sliderItem', 'year', 'type', 'rating', 'isFavorite', 'title', 'poster', 'id'])

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <div :class="['card', {'slider-item': sliderItem}]">
        <div class="image-wrapper">
            <img class="image" :src="`${baseUrl}${poster}`" alt="">
            <div class="play">
                <button class="button-play">
                    <div>
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                    </div>
                    <div>Play</div>
                </button>
            </div>
            <div v-if="!sliderItem" class="favorite" @click="movieStore.bookmark(id)">
                <div class="favorite-image-box">
                    <svg v-if="isFavorite" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>
                    <svg v-if="!isFavorite" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-top">
                <div>{{ year }}</div>
                <div class="dot"></div>
                <div class="type-box">
                    <template v-if="type === 'movie'">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>
                        <div>Movie</div>
                    </template>
                    <template v-if="type ==='series'">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/></svg>
                        <div>TV Series</div>
                    </template>
                </div>
                <div class="dot"></div>
                <div>{{ rating }}</div>
            </div>
            <h4 class="title">{{ title }}</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.image-wrapper{
    position: relative;
    border-radius: 8px;
    overflow: hidden;
}
.image-wrapper{
    cursor: pointer;
}
.image-wrapper::after{
    content: '';
    display: block;
    padding-top: 63%;
}
.image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
.favorite{
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    background-color: rgba(16, 20, 30, 0.5);
    border-radius: 50%;
    display: flex;
    transition: background 0.3s;

    @media (min-width: 768px) {
        top: 16px;
        right: 16px;
    }
}
.favorite:hover{

    @media (min-width: 1366px) {
        background-color: #FFFFFF;
    }
}
.favorite path{
    transition: stroke 0.3s, fill 0.3s;
}
.favorite:hover path{
    
    @media (min-width: 1366px) {
        stroke: #10141E;
        fill: #10141E;
    }
}
.favorite-image-box{
    margin: auto;
    line-height: 0;
}
.play{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    opacity: 0;
    transition: opacity 0.4s;
}
.image-wrapper:hover .play{
    
    @media (min-width: 1366px) {
        opacity: 1;
    }
}
.button-play{
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.25);
    gap: 20px;
    padding: 9px;
    padding-right: 20px;
    border-radius: 28.5px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    cursor: pointer;
}
.card{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.content-top{ 
    font-weight: 300;
    font-size: 11px;
    line-height: 14px;
    color: rgba(255, 255, 255, 0.75);
    display: flex;
    align-items: center;
    gap: 7px;

    @media (min-width: 768px) {
        font-size: 13px;
        line-height: 16px;
    }
}
.type-box{
    display: flex;
    align-items: center;
    gap: 4px;

    @media (min-width: 768px) {
        gap: 6px;
    }
}
.dot{
    width: 2px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;

    @media (min-width: 768px) {
        width: 3px;
        height: 3px;
    }
}
.title{
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 23px;
    }
}

// slider-item class
.slider-item{
    position: relative;

    .content{
        position: absolute;
        bottom: 16px;
        left: 16px;

        @media (min-width: 768px) {
            bottom: 24px;
            left: 24px;
        }
    }
    .image-wrapper::after{
        padding-top: 58%;

        @media (min-width: 768px) {
            padding-top: 51%;
        }

        @media (min-width: 1366px) {
            padding-top: 48%;
        }
    }
}
</style>