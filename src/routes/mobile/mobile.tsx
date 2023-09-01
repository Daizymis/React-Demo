import React from 'react';
import {BrowserRouter as Router, Route, Link, useParams, Routes} from 'react-router-dom';

import Home from '../../pages/mobile/Home';
import NotFound from '../../pages/NotFound';

const mobileRoutes = ()=> {
    return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route element={<NotFound/>}/>
        </Routes>
    );
}

export default mobileRoutes
