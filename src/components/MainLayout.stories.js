import MainLayout from './MainLayout.vue'

export default {
    component: MainLayout,
    parameters: {
        layout: 'fullscreen'
    }
}

export const Primary = {
    render: () => ({
        components: {MainLayout},
        template: '<MainLayout />'
    })
}

