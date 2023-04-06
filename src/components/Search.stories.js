import Search from './Search.vue'

export default {
    component: Search,
    parameters: {
        layout: 'fullscreen'
    }
}

export const Mobile = {
    render: () => ({
        components: {Search},
        template: '<div style="padding-left: 16px; padding-right: 16px;"><Search /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'mobile'
        }
    }
}

export const Tablet = {
    render: () => ({
        components: {Search},
        template: '<div style="padding-left: 16px; padding-right: 16px;"><Search /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'tablet'
        }
    }
}

export const Desktop = {
    render: () => ({
        components: {Search},
        template: '<div style="padding-left: 16px; padding-right: 16px;"><Search /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'desktop'
        }
    }
}