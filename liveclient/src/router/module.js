import search from '../views/Search'
import detail from '../views/detail'
import home from '../views/home'

export default [
    {
        path: '/search',
        name:'search',
        component: search,
        props: true
    },
    {
        path: '/detail',
        name:'detail',
        component: detail
    },
    {
        path: '/home',
        name:'home',
        component: home
    }
]