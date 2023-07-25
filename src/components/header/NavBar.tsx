import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import { createSignal } from 'solid-js';

import CatsDropdown from './CatsDropdown';
import SupDropdown from './SupDropdown';
import { Cat, Moon, Sun, DownArrow, Menu } from '../../assets/icons/Icons';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  const [isCatsDropdownVisible, setIsCatsDropdownVisible] = createSignal(false);
  const [isSupDropdownVisible, setIsSupDropdownVisible] = createSignal(false);
  const [isNavDrawer, setIsNavDrawer] = createSignal(false);
  return (
    <>
      <div
        class={`relative border-y py-2 justify-between w-full h-[45px] flex items-center bg-[${
          props.darkTheme ? '#000000' : '#ffffff'
        }]`}
      >
        <div class='pl-4 flex flex-row space-x-4 items-center'>
          <div class='md:hidden flex'>
            <p
              class='opacity-100 mr-4 cursor-pointer'
              onClick={() => {
                setIsNavDrawer(!isNavDrawer());
              }}
            >
              <Menu />
            </p>
          </div>
          <A href='/' class='flex flex-row space-x-2 pr-4'>
            <Cat />
            <p class='font-bold text-xl hover:text-[#acabab]'>CatPic.</p>
          </A>
          <div class='md:flex hidden flex-row space-x-8'>
            <div
              class='relative'
              onMouseEnter={() => setIsCatsDropdownVisible(true)}
              onMouseLeave={() => setIsCatsDropdownVisible(false)}
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
              onMouseEnter={() => setIsSupDropdownVisible(true)}
              onMouseLeave={() => setIsSupDropdownVisible(false)}
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
      {isNavDrawer() && (
        <div class='md:hidden flex flex-col absolute z-[10px] w-full bg-white cursor-pointer shadow-2xl'>
          <div class='flex flex-row items-center p-2 space-x-2 hover:bg-[#ddd]'>
            <p>Cats</p>
            <DownArrow />
          </div>
          <div class='flex flex-row items-center p-2 space-x-2 hover:bg-[#ddd]'>
            <p>About Cats</p>
            <DownArrow />
          </div>
          <div class='flex flex-row items-center p-2 space-x-2 hover:bg-[#ddd]'>
            <p>Support Cats</p>
            <DownArrow />
          </div>
        </div>
      )}
    </>
  );
}
