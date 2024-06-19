import React from 'react';
import { AuthRoutes, routes } from "./routes";
import { Routes, Route} from "react-router-dom";
import Page404 from "./pages/Page404";
import {useAppSelector} from "./hooks/redux";

const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.user)
    return (
        <Routes>
            {!isAuth ? routes.map(({ path, Component }, index) => (
                <Route path={path} element={<Component />} key={index} />
            )) : AuthRoutes.map(({ path, Component }, index) => (
                <Route path={path} element={<Component />} key={index} />
            ))}
            <Route path={"*"} element={<Page404 />} />
        </Routes>
    );
};

export default AppRouter;
