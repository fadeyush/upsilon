import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { router } from './UI/router';

const Router: FC = () => {
    return (
        <Routes>
            {router.map(route =>
                <Route
                    key={route.path}
                    element={<route.element/>}
                    path={route.path}
                />
            )}
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/*" element={<Navigate to="/products" replace />} />
        </Routes>
    );
};

export default Router;