import React from "react";
import PrivateRouteList from "../PrivateRouteList/PrivateRouteList";
import PublicRouteList from "../PublicRouteList/PublicRouteList";

const AppRouter = () => {
    const isUser = true;

    return <div>{isUser ? <PrivateRouteList /> : <PublicRouteList />} </div>;
};

export default AppRouter;
