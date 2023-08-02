import React from 'react';
import {AuthRoutes, routes} from "./routes";
import {Routes, Route, Navigate} from "react-router-dom";


const AppRouter = () => {
    const user = false
    return (
        <Routes>
            {!user ? routes.map(({path,Component}, index) =>(
                <Route path={path} element={<Component />} key={index}/>
            )) : AuthRoutes.map(({path, Component}, index) => (
                    <Route path={path} element={<Component />} key={index} />
            ))}
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    );
};

export default AppRouter;