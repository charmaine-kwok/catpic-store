import { createSignal, createEffect } from 'solid-js';

import Routers from './components/Routers';
import Banner from './components/header/Banner';
import NavBar from './components/header/NavBar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ToTopButton from './components/ToTopButton';

function App() {
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  const [darkTheme, setDarkTheme] = createSignal(
    localStorage.getItem('lightMode') === 'dark' ? true : false
  );
  const [toTopButton, setToTopButton] = createSignal(false);
  createEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    });
  });
  return (
    <div
      class='justify-start flex flex-col w-[100vw] h-full'
      classList={{ 'bg-black': darkTheme(), 'text-white': darkTheme() }}
    >
      <Banner />
      <div classList={{ 'fixed top-0 w-full z-[10]': toTopButton() }}>
        <NavBar toggleTheme={toggleTheme} darkTheme={darkTheme()} />
      </div>
      <div class='min-h-[100vh]' classList={{ 'text-white': darkTheme() }}>
        <Routers />
      </div>
      <div
        class={`flex flex-col items-center justify-center space-y-4 py-8 ${
          !darkTheme() ? 'bg-yellow-100' : 'bg-blue-600'
        }`}
      >
        <Newsletter />
      </div>
      <div class={`bg-slate-${darkTheme() ? 700 : 300}`}>
        <Footer />
      </div>
      {toTopButton() && <ToTopButton darkTheme={darkTheme()} />}
    </div>
  );
}

export default App;
