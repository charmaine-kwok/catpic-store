import { Routes, Route } from '@solidjs/router';
import { lazy } from 'solid-js';

import Home from '../pages/Home';

const Cats = lazy(() => import('../pages/Cats'));
const Details = lazy(() => import('../pages/Details'));

export default function Routers() {
  return (
    <Routes>
      <Route path='/' component={Home} />
      <Route path='/cats/:cat' component={Details} />
      <Route path='/cats' component={Cats} />
    </Routes>
  );
}
