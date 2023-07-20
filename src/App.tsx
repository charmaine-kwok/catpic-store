import { createSignal, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import Banner from './components/header/Banner';
import NavBar from './components/header/NavBar';
import Home from './pages/Home';

const Cats = lazy(() => import('./pages/Cats'));
const Details = lazy(() => import('./pages/Details'));

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div
      class='justify-start flex flex-col w-[100vw] h-[100vh]'
      classList={{ 'bg-black': darkTheme(), 'text-white': darkTheme() }}
    >
      <div>
        <Banner />
        <NavBar toggleTheme={toggleTheme} darkTheme={darkTheme()} />
      </div>
      <div classList={{ 'text-white': darkTheme() }}>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/cats/:cat' component={Details} />
          <Route path='/cats' component={Cats} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
