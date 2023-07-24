import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import { createSignal } from 'solid-js';

import CatsDropdown from './CatsDropdown';
import SupDropdown from './SupDropdown';
import { Cat, Moon, Sun, DownArrow } from '../../assets/icons/Icons';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  const [isCatsDropdownVisible, setCatsDropdownVisible] = createSignal(false);
  const [isSupDropdownVisible, setSupDropdownVisible] = createSignal(false);
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
            onMouseEnter={() => setCatsDropdownVisible(true)}
            onMouseLeave={() => setCatsDropdownVisible(false)}
          >
            <A
              href='/cats'
              class=' hover:text-[#acabab] flex flex-row items-center space-x-1'
            >
              <p>Cats</p>
              <DownArrow />
            </A>

            {isCatsDropdownVisible() && <CatsDropdown />}
          </div>
          <A
            href='https://en.wikipedia.org/wiki/Cat'
            class='hover:text-[#acabab]'
          >
            About Cats
          </A>
          <div
            class='relative'
            onMouseEnter={() => setSupDropdownVisible(true)}
            onMouseLeave={() => setSupDropdownVisible(false)}
          >
            <A
              href='/cats'
              class=' hover:text-[#acabab] flex flex-row items-center space-x-1'
            >
              <p> Support Cats</p>
              <DownArrow />
            </A>

            {isSupDropdownVisible() && <SupDropdown />}
          </div>
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
