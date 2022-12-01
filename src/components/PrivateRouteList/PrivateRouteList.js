import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { privateRoutes } from "../../routes/configRoutes";
import { CHAT_ROUTE } from "../../utils/routeKeys";

const PrivateRouteList = () => {
    return (
        <Routes>
            {privateRoutes.map((privateRoute) => {
                const { path, Component } = privateRoute;

                return <Route path={path} element={<Component />} exact />;
            })}
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
        </Routes>
    );
};

export default PrivateRouteList;
