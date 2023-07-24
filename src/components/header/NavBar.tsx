import { A } from '@solidjs/router';
import { Show } from 'solid-js';

import { Cat, Moon, Sun } from '../../assets/icons/Icons';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  return (
    <div class='border-y py-2 justify-between w-full flex items-center'>
      <div class='pl-4 flex flex-row space-x-4 items-center w-1/4'>
        <A href='/' class='flex flex-row space-x-2 mr-4'>
          <Cat />
          <p class='font-bold text-xl hover:text-[#acabab]'>CatPic.</p>
        </A>

        <A href='/cats' class='hover:text-[#acabab]'>
          Cats
        </A>
      </div>

      <div class='pr-4 w-1/4 flex flex-row space-x-4 justify-end'>
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
