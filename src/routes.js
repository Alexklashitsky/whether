import { Weather } from './pages/weather.jsx'
import { favorites } from './pages/favorites.jsx'

const routes = [

    {
        path: '/',
        component: Weather,
    },
    {
        path: '/favorites',
        component: favorites,
    },

]

export default routes;