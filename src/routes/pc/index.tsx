import React from 'react';
import {BrowserRouter as Router, Route, Link, useParams, Routes} from 'react-router-dom';

import Layout from '../../pages/pc/Layout';
import NotFound from '../../pages/NotFound';

function pcRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route element={<NotFound/>}/>
            </Routes>
    );
}

export default pcRoutes
