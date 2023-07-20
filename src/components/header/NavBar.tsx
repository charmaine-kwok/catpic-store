import { A } from '@solidjs/router';
import { Show } from 'solid-js';

import { Cat, Moon, Sun } from '../../assets/icons/Icons';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  return (
    <div class='border-y py-2 justify-between w-[100vw] flex items-center'>
      <div class='pl-4 flex flex-row space-x-4 items-center justify-start w-1/4'>
        <Cat />
        <A href='/' class='justify-center flex hover:text-[#acabab]'>
          Home
        </A>

        <p>
          <A href='/cats' class='justify-center flex hover:text-[#acabab]'>
            Cats
          </A>
        </p>
      </div>
      <A href='/' class='w-1/2 justify-center flex'>
        <p class='font-bold text-xl hover:text-[#acabab]'>CatPic.</p>
      </A>
      <div class='pr-4 w-1/4 flex flex-row space-x-4 items-center justify-end'>
        <p>Cart</p>
        <div onClick={() => props.toggleTheme()} class='hover:cursor-pointer'>
          <Show when={!props.darkTheme} fallback={<Sun />}>
            <Moon />
          </Show>
        </div>
      </div>
    </div>
  );
}
