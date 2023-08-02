import React from 'react';
import {AuthRoutes, routes} from "./routes";
import {Routes, Route, Navigate} from "react-router-dom";


const AppRouter = () => {
    const user = false
    return (
        <Routes>
            {!user ? routes.map(({path,Component}) =>(
                <Route path={path} element={<Component />}/>
            )) : AuthRoutes.map(({path, Component}) => (
                    <Route path={path} element={<Component />} />
            ))}
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    );
};

export default AppRouter;