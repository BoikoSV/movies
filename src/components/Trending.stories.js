import Trending from './Trending.vue'
import {Big} from './Card.stories'

export default {
    component: Trending,
    parameters: {
        layout: 'fullscreen'
    }
}

export const Mobile = {
    render: (args) => ({
        components: {Trending},
        setup() {
            return {args}
        },
        template: '<div style="padding-left: 16px;"><Trending v-bind="args" /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'mobile'
        }
    },
    args: {
        movies: [
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
        ]
    }
}


export const Tablet = {
    render: (args) => ({
        components: {Trending},
        setup() {
            return {args}
        },
        template: '<div style="padding-left: 16px;"><Trending v-bind="args" /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'tablet'
        }
    },
    args: {
        movies: [
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
        ]
    }
}


export const Desktop = {
    render: (args) => ({
        components: {Trending},
        setup() {
            return {args}
        },
        template: '<div style="padding-left: 16px;"><Trending v-bind="args" /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'desktop'
        }
    },
    args: {
        movies: [
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
            {...Big.args},
        ]
    }
}