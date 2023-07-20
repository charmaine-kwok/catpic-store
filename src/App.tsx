import { createSignal } from 'solid-js';

import Routers from './components/Routers';
import Banner from './components/header/Banner';
import NavBar from './components/header/NavBar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div
      class='justify-start flex flex-col w-[100vw] h-full'
      classList={{ 'bg-black': darkTheme(), 'text-white': darkTheme() }}
    >
      <div>
        <Banner />
        <NavBar toggleTheme={toggleTheme} darkTheme={darkTheme()} />
      </div>
      <div class='h-[100vh]' classList={{ 'text-white': darkTheme() }}>
        <Routers />
      </div>
      <div
        class={`flex flex-col items-center justify-center space-y-4 py-8 my-4 ${
          !darkTheme() ? 'bg-yellow-100' : 'bg-blue-600'
        }`}
      >
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
