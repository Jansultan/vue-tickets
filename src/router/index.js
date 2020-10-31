import VueRouter from 'vue-router'

import Search from '../components/search/Search'
import Layout from '../components/main/Layout'
import NotFound from '../components/pages/404'

export default new VueRouter({
    mode: 'history',
    routes:[{
        path:'/',
        name:'',
        component:Layout,
        children:[{
            path:'/',
            name:'search',
            component:Search
        }]
    },
    {
        path: '*',
        name:'not-found',
        component:NotFound
    }]
})