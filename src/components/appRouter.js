import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;