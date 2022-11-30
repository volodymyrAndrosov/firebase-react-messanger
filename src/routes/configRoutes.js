import { LOGIN_ROUTE } from "../utils/consts";
import { CHAT_ROUTE } from "../utils/consts";

import LoginPage from '../pages/LoginPage/LoginPage';
import ChatPage from '../pages/ChatPage/ChatPage';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    }
]


export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: ChatPage
    }
]