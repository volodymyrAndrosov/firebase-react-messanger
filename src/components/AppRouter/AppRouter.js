import React, { useContext } from "react";
import PrivateRouteList from "../PrivateRouteList/PrivateRouteList";
import PublicRouteList from "../PublicRouteList/PublicRouteList";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return <div>{user ? <PrivateRouteList /> : <PublicRouteList />}</div>;
};

export default AppRouter;
