import {createRouter, createWebHistory} from 'vue-router'
import {useMoviesStore} from '../stores/movies'
import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'
import Series from '../pages/Series.vue'
import Bookmarked from '../pages/Bookmarked.vue'
const BASE_URL = import.meta.env.BASE_URL

const routes = [
    {
        path: `${BASE_URL}`,
        name: 'home',
        meta: {
            placeholder: 'Search for movies or TV series'
        },
        component: Home
    },
    {
        path: `${BASE_URL}movie`,
        name: 'movie',
        meta: {
            placeholder: 'Search for movies'
        },
        component: Movie
    },
    {
        path: `${BASE_URL}series`,
        name: 'series',
        meta: {
            placeholder: 'Search for TV series'
        },
        component: Series
    },
    {
        path: `${BASE_URL}bookmarked`,
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