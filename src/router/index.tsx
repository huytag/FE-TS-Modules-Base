import Detail from "../Pages/Detail"
import Home from "../Pages/Home"

//public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/detail',
        component: Detail,
    }
]

//private routes
// const privateRoutes = [
    
// ]

export {publicRoutes}