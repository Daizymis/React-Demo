import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Link, useParams, Routes} from 'react-router-dom';

import Layout from '../../pages/pc/Layout';
import NotFound from '../../pages/NotFound';
import Promise1 from '../../pages/pc/example/promise/demo1'
function pcRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route
                        path="/example/promise/1"
                        element={<Promise1/>}
                    />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
    );
}

export default pcRoutes
