import { createSignal, Show } from 'solid-js';

import { Moon, Sun, Cat } from '../assets/icons/Icons';

export default function NavBar() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div
      class='border-y py-2 justify-between w-[100vw] flex items-center'
      classList={{ 'text-white': darkTheme(), 'bg-black': darkTheme() }}
    >
      <div class='pl-4 flex flex-row space-x-4 items-center justify-center'>
        <Cat />
        <p>Home</p>
        <p>Category</p>
      </div>
      <p class='font-bold text-xl'>CatPic.</p>
      <div class='pr-4 flex flex-row space-x-4 items-center justify-center'>
        <p>Cart</p>
        <div onClick={toggleTheme}>
          <Show when={!darkTheme()} fallback={<Sun />}>
            <Moon />
          </Show>
        </div>
      </div>
    </div>
  );
}
