import Movies from './Movies.vue'
import {First, Second} from './Card.stories'

export default {
    component: Movies
}

export const Mobile = {
    render: (args) => ({
        components: {Movies},
        setup() {
            return {args}
        },
        template: '<Movies v-bind="args" />'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'mobile'
        }
    },
    args: {
        title: 'Movies',
        movies: [
            {...First.args},
            {...Second.args},
            {...First.args},
            {...Second.args},
            {...First.args},
            {...Second.args},
            {...First.args},
            {...Second.args},
            {...First.args},
            {...Second.args},
            {...First.args},
        ]
    }
}