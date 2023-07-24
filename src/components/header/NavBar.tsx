import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import { createSignal } from 'solid-js';

import { Cat, Moon, Sun, DownArrow } from '../../assets/icons/Icons';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  const [isDropdownVisible, setDropdownVisible] = createSignal(false);
  return (
    <div class='border-y py-2 justify-between w-full h-[45px] flex items-center'>
      <div class='pl-4 flex flex-row space-x-4 items-center'>
        <A href='/' class='flex flex-row space-x-2 mr-4'>
          <Cat />
          <p class='font-bold text-xl hover:text-[#acabab]'>CatPic.</p>
        </A>
        <div class='flex flex-row space-x-8'>
          <div
            class='relative'
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <A
              href='/cats'
              class=' hover:text-[#acabab] flex flex-row items-center space-x-1'
            >
              <p>Cats</p>
              <DownArrow />
            </A>

            {isDropdownVisible() && (
              <div class='absolute w-[100px] top-full shadow-xl flex flex-col text-black bg-[#f1f1f1] z-[10]'>
                <A class='dropdown-content' href='/cats/Straight'>
                  Straight
                </A>
                <A class='dropdown-content' href='/cats/Cook'>
                  Cook
                </A>
                <A class='dropdown-content' href='/cats/Ball'>
                  Ball
                </A>
                <A class='dropdown-content' href='/cats/July'>
                  July
                </A>
              </div>
            )}
          </div>
          <A
            href='https://en.wikipedia.org/wiki/Cat'
            class='hover:text-[#acabab]'
          >
            About Cats
          </A>
        </div>
      </div>

      <div class='pr-4 flex flex-row space-x-4'>
        {/* <p>Cart</p> */}
        <div
          onClick={() => {
            props.toggleTheme();
            localStorage.setItem(
              'lightMode',
              props.darkTheme ? 'dark' : 'light'
            );
          }}
          class='hover:cursor-pointer'
        >
          <Show when={!props.darkTheme} fallback={<Sun />}>
            <Moon />
          </Show>
        </div>
      </div>
    </div>
  );
}
