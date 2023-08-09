import React from 'react';
import { AuthRoutes, routes } from "./routes";
import { Routes, Route} from "react-router-dom";
import Page404 from "./pages/Page404";

const AppRouter = () => {
    const user = false;
    return (
        <Routes>
            {!user ? routes.map(({ path, Component }, index) => (
                <Route path={path} element={<Component />} key={index} />
            )) : AuthRoutes.map(({ path, Component }, index) => (
                <Route path={path} element={<Component />} key={index} />
            ))}
            <Route path={"*"} element={<Page404 />} />
        </Routes>
    );
};

export default AppRouter;
