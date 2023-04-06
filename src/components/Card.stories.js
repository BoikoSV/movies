import Card from './Card.vue'

export default {
    component: Card
}

export const First = {
    render: (args) => ({
        components: {Card},
        setup(){
            return {args}
        },
        template: '<div style="width: 164px;"><Card v-bind="args" /></div>'
    }),
    args: {
        sliderItem: false,
        year: 2019,
        type: 'movie',
        rating: 'PG',
        isFavorite: false,
        title: 'Beyond Earth',
        poster: 'https://img04.rl0.ru/afisha/e1808x1016p0x0f1260x720q65i/s4.afisha.ru/mediastorage/67/c2/d9eb90bd88414f96b58f95f3c267.jpg'
    }
}

export const Second = {
    render: (args) => ({
        components: {Card},
        setup(){
            return {args}
        },
        template: '<div style="width: 220px;"><Card v-bind="args" /></div>'
    }),
    args: {
        sliderItem: false,
        year: 2020,
        type: 'series',
        rating: '18+',
        isFavorite: true,
        title: 'The Great Lands',
        poster: 'https://lamcdn.net/wonderzine.com/post-og_image/dtUTbsfxt553Qe9I6_BdSw.jpg'
    }
}

export const Big = {
    render: (args) => ({
        components: {Card},
        setup(){
            return {args}
        },
        template: '<div style="width: 470px;"><Card v-bind="args" /></div>'
    }),
    args: {
        sliderItem: true,
        year: 2020,
        type: 'series',
        rating: 'E',
        isFavorite: false,
        title: 'Earth’s Untouched',
        poster: "https://podrobnosti.ua/media/pictures/2018/2/22/thumbs/740x415/foto-stop-kadr-iz-filma_rect_2c8e18950ad4759f2cc813dd43c8edfd.jpg"
    }
}
