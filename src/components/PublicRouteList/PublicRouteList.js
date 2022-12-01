import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { publicRoutes } from "../../routes/configRoutes";
import { LOGIN_ROUTE } from "../../utils/routeKeys";

const PublicRouteList = () => {
    return (
        <Routes >
            {publicRoutes.map((publicRoute) => {
                const { path, Component } = publicRoute;

                return <Route path={path} element={<Component />} exact />;
            })}
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
        </Routes >
    );
};

export default PublicRouteList;
