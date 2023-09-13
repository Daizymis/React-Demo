import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams, Routes } from 'react-router-dom';

import Layout from '../../pages/mobile/Layout';
import Home from '../../pages/mobile/Home';
import NotFound from '../../pages/NotFound';
import Selector from '../../pages/mobile/example/filter/demo';
import LazyLoadImage from '../../pages/mobile/example/lazy-load-image/demo';

const mobileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/example/selector" element={<Selector />} />
        <Route path="/example/lazyLoadImage" element={<LazyLoadImage />} />
      </Route>
      <Route element={<NotFound />} />
    </Routes>
  );
};

export default mobileRoutes;
