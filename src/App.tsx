import { createSignal, Show } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';

import { Moon, Sun, Cat } from './assets/icons/Icons';
import Home from './pages/Home';
import Cats from './pages/Cats';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div
      class='justify-start flex flex-col w-[100vw] h-[100vh]'
      classList={{ 'bg-black': darkTheme() }}
    >
      <div>
        <div class='bg-green-600 w-[100vw] flex items-center justify-center h-[30px]'>
          <p class='text-white'>Super deal! Free Shipping on Orders Over $50</p>
        </div>
        <div
          class='border-y py-2 justify-between w-[100vw] flex items-center'
          classList={{ 'text-white': darkTheme() }}
        >
          <div class='pl-4 flex flex-row space-x-4 items-center justify-start w-1/4'>
            <Cat />
            <A href='/' class='justify-center flex'>
              <p class={`${darkTheme() ? 'text-white' : 'text-black'}`}>Home</p>
            </A>
            <p>
              <A href='/cats' class='justify-center flex'>
                <p class={`${darkTheme() ? 'text-white' : 'text-black'}`}>
                  Cats
                </p>
              </A>
            </p>
          </div>
          <A href='/' class='w-1/2 justify-center flex'>
            <p
              class={`font-bold text-xl ${
                darkTheme() ? 'text-white' : 'text-black'
              }`}
            >
              CatPic.
            </p>
          </A>
          <div class='pr-4 w-1/4 flex flex-row space-x-4 items-center justify-end'>
            <p>Cart</p>
            <div onClick={toggleTheme}>
              <Show when={!darkTheme()} fallback={<Sun />}>
                <Moon />
              </Show>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' component={Home} />
        {/* {/* <Route path="/cart" component={} /> */}
        <Route path='/cats' component={Cats} />
      </Routes>
    </div>
  );
}

export default App;
