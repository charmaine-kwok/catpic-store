import { createSignal, createEffect } from 'solid-js';

import Routers from './components/Routers';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
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
      class='justify-start flex flex-col w-[100vw] h-full text-black'
      classList={{ 'bg-black': darkTheme(), 'text-white': darkTheme() }}
    >
      <div class='fixed top-0 w-full z-[10]'>
        <NavBar toggleTheme={toggleTheme} darkTheme={darkTheme()} />
      </div>
      <div
        class='min-h-[100vh] mt-[45px]'
        classList={{ 'text-white': darkTheme() }}
      >
        <Routers />
      </div>

      <div
        class={'bg-slate-300 mobile:mt-8 mt-4'}
        classList={{ 'bg-slate-700': darkTheme() }}
      >
        <Footer />
      </div>
      {toTopButton() && <ToTopButton darkTheme={darkTheme()} />}
    </div>
  );
}

export default App;
