import {createRouter, createWebHistory} from 'vue-router'
import {useMoviesStore} from '../stores/movies'
import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'
import Series from '../pages/Series.vue'
import Bookmarked from '../pages/Bookmarked.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            placeholder: 'Search for movies or TV series'
        },
        component: Home
    },
    {
        path: '/movie',
        name: 'movie',
        meta: {
            placeholder: 'Search for movies'
        },
        component: Movie
    },
    {
        path: '/series',
        name: 'series',
        meta: {
            placeholder: 'Search for TV series'
        },
        component: Series
    },
    {
        path: '/bookmarked',
        name: 'bookmarked',
        meta: {
            placeholder: 'Search for bookmarked shows'
        },
        component: Bookmarked
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    const moviesStore = useMoviesStore();
    moviesStore.searchQuery = ''
    next()
  })

export default router;