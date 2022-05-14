import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import PartsPage from "./pages/PartsPage";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PARTS_ROUTE, HOME_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },{
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PARTS_ROUTE + '/:id',
        Component: PartsPage,
    },
]