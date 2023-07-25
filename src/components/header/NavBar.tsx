import { A } from '@solidjs/router';
import { createSignal, Show, onCleanup } from 'solid-js';

import SupDropdown, { SupDropdownContent } from './SupDropdown';
import CatsDropdown, { CatsDropdownContent } from './CatsDropdown';
import {
  Cat,
  Moon,
  Sun,
  DownArrow,
  Menu,
  Close,
  UpArrow,
} from '../../assets/icons/Icons';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  const [isCatsDropdownVisible, setIsCatsDropdownVisible] = createSignal(false);
  const [isSupDropdownVisible, setIsSupDropdownVisible] = createSignal(false);
  const [isNavDrawer, setIsNavDrawer] = createSignal(false);
  const [showCatsItems, setShowCatsItems] = createSignal(false);
  const [showSupItems, setShowSupItems] = createSignal(false);

  function clickOutside(el: Element) {
    const onClick = (e: Event) => {
      if (!el.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.body.addEventListener('click', onClick);

    onCleanup(() => {
      document.body.removeEventListener('click', onClick);
    });
  }

  function closeMenu() {
    setShowCatsItems(false);
    setShowSupItems(false);
    setIsNavDrawer(!isNavDrawer());
  }
  return (
    <>
      <div
        class={`relative border-y py-2 justify-between w-full h-[45px] flex items-center bg-[${
          props.darkTheme ? '#000000' : '#ffffff'
        }]`}
      >
        <div class='pl-4 flex flex-row space-x-4 items-center'>
          <div class='md:hidden flex'>
            <div
              class='opacity-100 mr-4 cursor-pointer'
              onClick={() => {
                if (isNavDrawer()) {
                  closeMenu();
                } else {
                  setIsNavDrawer(!isNavDrawer());
                }
              }}
            >
              <div>
                <Show when={isNavDrawer()} fallback={<Menu />}>
                  <Close />
                </Show>
              </div>
            </div>
          </div>
          <A href='/' class='flex flex-row space-x-2 pr-4'>
            <Cat />
            <p class='font-bold text-xl md:hover:text-[#acabab]'>CatPic.</p>
          </A>
          <div class='md:flex hidden flex-row space-x-8'>
            <div
              class='relative'
              onMouseEnter={() => setIsCatsDropdownVisible(true)}
              onMouseLeave={() => setIsCatsDropdownVisible(false)}
            >
              <A
                href='/cats'
                class='hover:text-[#acabab] flex flex-row items-center space-x-1'
              >
                <p>Cats</p>
                <Show when={isCatsDropdownVisible()} fallback={<DownArrow />}>
                  <UpArrow size={12} />
                </Show>
              </A>

              {isCatsDropdownVisible() && <CatsDropdown />}
            </div>
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
                <Show when={isSupDropdownVisible()} fallback={<DownArrow />}>
                  <UpArrow size={12} />
                </Show>
              </A>

              {isSupDropdownVisible() && <SupDropdown />}
            </div>
          </div>
        </div>

        <div class='pr-4 flex flex-row space-x-4'>
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
        <div
          use:clickOutside
          id='navDrawer'
          class='md:hidden flex flex-col absolute w-full cursor-pointer shadow-2xl'
          classList={{
            'bg-white': !props.darkTheme,
            'bg-black': props.darkTheme,
          }}
        >
          <div
            class='flex flex-row items-center p-2 space-x-2'
            classList={{ 'bg-[#acabab]': showCatsItems() }}
            onClick={() => {
              setShowCatsItems(!showCatsItems());
            }}
          >
            <p>Cats</p>
            <Show when={showCatsItems()} fallback={<DownArrow />}>
              <UpArrow size={12} />
            </Show>
          </div>
          {showCatsItems() && (
            <div
              class='pl-6 flex flex-col font-medium'
              onClick={() => closeMenu()}
            >
              <CatsDropdownContent />
            </div>
          )}

          <div
            class='flex flex-row items-center p-2 space-x-2'
            classList={{ 'bg-[#acabab]': showSupItems() }}
            onClick={() => {
              setShowSupItems(!showSupItems());
            }}
          >
            <p>Support Cats</p>
            <Show when={showSupItems()} fallback={<DownArrow />}>
              <UpArrow size={12} />
            </Show>
          </div>
          {showSupItems() && (
            <div class='pl-6 flex flex-col font-medium'>
              <SupDropdownContent />
            </div>
          )}
        </div>
      )}
    </>
  );
}
