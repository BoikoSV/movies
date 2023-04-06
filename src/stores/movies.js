import { defineStore } from 'pinia'
import {ref, computed} from 'vue'

export const useMoviesStore = defineStore('movies', () => {
    const filmsArray = ref([
        {
            "id": 1,
            "title": "The Shawshank Redemption",
            "year": 1994,
            "rating": "16+",
            "bookmarked": true,
            "type": "movie",
            "image": "shoushenk.jpg",
            "tranding": true,
            "recomended": false
        },
        {
            "id": 2,
            "title": "Far Cry 5: Inside Eden's Gate",
            "year": 2018,
            "rating": "16+",
            "bookmarked": false,
            "type": "movie",
            "image": "far-cry.jpg",
            "tranding": false,
            "recomended": true
        },
        {
            "id": 3,
            "title": "The Godfather",
            "year": 1972,
            "rating": "16+",
            "bookmarked": false,
            "type": "movie",
            "image": "father.jpg",
            "tranding": false,
            "recomended": false
        },
        {
            "id": 4,
            "title": "Rana Naidu 1 season",
            "year": 2023,
            "rating": "MA",
            "bookmarked": true,
            "type": "series",
            "image": "rana.jpg",
            "tranding": true,
            "recomended": false
        },
        {
            "id": 5,
            "title": "The Mandalorian 3 season",
            "year": 2023,
            "rating": "PG",
            "bookmarked": false,
            "type": "series",
            "image": "mandarloretc.jpg",
            "tranding": false,
            "recomended": true
        },
        {
            "id": 6,
            "title": "Temple Grandin",
            "year": 2010,
            "rating": "PG",
            "bookmarked": false,
            "type": "movie",
            "image": "demkl.jpg",
            "tranding": true,
            "recomended": false
        },
        {
            "id": 7,
            "title": "Trading Paint",
            "year": 2019,
            "rating": "R",
            "bookmarked": true,
            "type": "movie",
            "image": "tranding.jpg",
            "tranding": false,
            "recomended": false
        },
        {
            "id": 8,
            "title": "Amazing Grace",
            "year": 2018,
            "rating": "G",
            "bookmarked": false,
            "type": "movie",
            "image": "laska.jpg",
            "tranding": false,
            "recomended": true
        },
        {
            "id": 9,
            "title": "Spider-Man: No Way Home",
            "year": 2021,
            "rating": "12+",
            "bookmarked": false,
            "type": "movie",
            "image": "spiderman.jpg",
            "tranding": true,
            "recomended": false
        },
        {
            "id": 10,
            "title": "Doctor Strange",
            "year": 2022,
            "rating": "12+",
            "bookmarked": true,
            "type": "movie",
            "image": "strange.jpg",
            "tranding": false,
            "recomended": false
        },
        {
            "id": 11,
            "title": "Morbius",
            "year": 2022,
            "rating": "12+",
            "bookmarked": false,
            "type": "movie",
            "image": "morbius.jpg",
            "tranding": false,
            "recomended": true
        },
        {
            "id": 12,
            "title": "Game of Thrones 1 season",
            "year": 2011,
            "rating": "18+",
            "bookmarked": false,
            "type": "series",
            "image": "trones.jpg",
            "tranding": true,
            "recomended": false
        },
        {
            "id": 13,
            "title": "Boardwalk Empire 2 season",
            "year": 2011,
            "rating": "18+",
            "bookmarked": true,
            "type": "series",
            "image": "123456.jpg",
            "tranding": false,
            "recomended": false
        },
        {
            "id": 14,
            "title": "His Dark Materials 2 season",
            "year": 2020,
            "rating": "16+",
            "bookmarked": false,
            "type": "series",
            "image": "materials.jpg",
            "tranding": false,
            "recomended": true
        },
        {
            "id": 15,
            "title": "Raised by Wolves 1 season",
            "year": 2020,
            "rating": "MA",
            "bookmarked": false,
            "type": "series",
            "image": "wolves.jpg",
            "tranding": true,
            "recomended": false
        },
        {
            "id": 16,
            "title": "Westworld 3 season",
            "year": 2020,
            "rating": "16+",
            "bookmarked": true,
            "type": "series",
            "image": "west.jpg",
            "tranding": false,
            "recomended": false
        },
        {
            "id": 17,
            "title": "Room 104 2 season",
            "year": 2018,
            "rating": "18+",
            "bookmarked": true,
            "type": "series",
            "image": "room.jpg",
            "tranding": false,
            "recomended": true
        },
        {
            "id": 18,
            "title": "Six Feet Under 5 season",
            "year": 2005,
            "rating": "18+",
            "bookmarked": false,
            "type": "series",
            "image": "klient.jpg",
            "tranding": true,
            "recomended": false
        }
    ])

    const searchQuery = ref('')

    const tranding = computed(() => {
        return filmsArray.value.filter(({tranding}) => tranding)
    })

    const recomended = computed(() => {
        return filmsArray.value.filter(({recomended}) => recomended).filter(({title}) => {
            if(searchQuery.value){
                return title.toLowerCase().includes(searchQuery.value.toLowerCase())
            }
            return true
        })
    })

    const movies = computed(() => {
        return filmsArray.value.filter(({type}) => type === 'movie').filter(({title}) => {
            if(searchQuery.value){
                return title.toLowerCase().includes(searchQuery.value.toLowerCase())
            }
            return true
        })
    })

    const series = computed(() => {
        return filmsArray.value.filter(({type}) => type === 'series').filter(({title}) => {
            if(searchQuery.value){
                return title.toLowerCase().includes(searchQuery.value.toLowerCase())
            }
            return true
        })
    })

    const bookmarkedMovies = computed(() => {
        return filmsArray.value.filter(({type, bookmarked}) => type === 'movie' && bookmarked).filter(({title}) => {
            if(searchQuery.value){
                return title.toLowerCase().includes(searchQuery.value.toLowerCase())
            }
            return true
        })
    })

    const bookmarkedSeries = computed(() => {
        return filmsArray.value.filter(({type, bookmarked}) => type === 'series' && bookmarked).filter(({title}) => {
            if(searchQuery.value){
                return title.toLowerCase().includes(searchQuery.value.toLowerCase())
            }
            return true
        })
    })

    function bookmark(id){
        filmsArray.value.map((film) => {
            if(film.id === id){
                film.bookmarked = !film.bookmarked
            }
        })
    }

    return {searchQuery, tranding, recomended, movies, series, bookmarkedMovies, bookmarkedSeries, bookmark}
})