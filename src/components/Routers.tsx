import { Routes, Route } from '@solidjs/router';
import { lazy } from 'solid-js';

import Home from '../pages/Home';

const Cats = lazy(() => import('../pages/Cats'));
const Straight = lazy(() => import('../pages/Straight'));
const Cook = lazy(() => import('../pages/Cook'));
const Ball = lazy(() => import('../pages/Ball'));
const July = lazy(() => import('../pages/July'));

export default function Routers() {
  return (
    <Routes>
      <Route path='/' component={Home} />
      <Route path='/cats/Straight' component={Straight} />
      <Route path='/cats/Cook' component={Cook} />
      <Route path='/cats/Ball' component={Ball} />
      <Route path='/cats/July' component={July} />
      <Route path='/cats' component={Cats} />
    </Routes>
  );
}
