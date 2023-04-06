import Header from './Header.vue'

export default {
    component: Header,
    parameters: {
        layout: 'fullscreen'
    }
}


export const Mobile = {
    render: () => ({
        components: {Header},
        template: '<Header />'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'mobile'
        }
    }
}

export const Tablet = {
    render: () => ({
        components: {Header},
        template: '<div style="width: 720px; margin: 10px auto"><Header /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'tablet'
        }
    }
}

export const Desktop = {
    render: () => ({
        components: {Header},
        template: '<div style="height: 100vh; padding: 32px; width: 160px;"><Header /></div>'
    }),
    parameters: {
        viewport: {
            defaultViewport: 'desktop'
        }
    }
}