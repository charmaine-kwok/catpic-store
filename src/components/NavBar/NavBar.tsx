import { A } from '@solidjs/router';
import { createSignal, Show } from 'solid-js';

import SupDropdown from './SupDropdown';
import CatsDropdown from './CatsDropdown';
import { Cat, DownArrow, Menu, Close, UpArrow } from '../../assets/icons/Icons';
import NavDrawer from './NavDrawer';
import ThemeToggleIcon from './ThemeToggleIcon';

export default function NavBar(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  const [isCatsDropdownVisible, setIsCatsDropdownVisible] = createSignal(false);
  const [isSupDropdownVisible, setIsSupDropdownVisible] = createSignal(false);
  const [isNavDrawer, setIsNavDrawer] = createSignal(false);
  const [showCatsItems, setShowCatsItems] = createSignal(false);
  const [showSupItems, setShowSupItems] = createSignal(false);

  function closeMenu() {
    setShowCatsItems(false);
    setShowSupItems(false);
    setIsNavDrawer(!isNavDrawer());
  }
  return (
    <>
      <div
        class={`relative border-y py-2 px-6 justify-between w-full h-[45px] flex items-center bg-[${
          props.darkTheme ? '#000000' : '#ffffff'
        }]`}
      >
        <div class='flex flex-row space-x-4 items-center'>
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
              <A href='/cats' class='navBar-item'>
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
              <A href='/cats' class='navBar-item'>
                <p> Support Cats</p>
                <Show when={isSupDropdownVisible()} fallback={<DownArrow />}>
                  <UpArrow size={12} />
                </Show>
              </A>

              {isSupDropdownVisible() && <SupDropdown />}
            </div>
          </div>
        </div>

        <ThemeToggleIcon
          toggleTheme={() => props.toggleTheme()}
          darkTheme={props.darkTheme}
        />
      </div>
      {isNavDrawer() && (
        <NavDrawer
          darkTheme={props.darkTheme}
          showCatsItems={showCatsItems()}
          setShowCatsItems={setShowCatsItems}
          showSupItems={showSupItems()}
          setShowSupItems={setShowSupItems}
          isNavDrawer={isNavDrawer()}
          setIsNavDrawer={setIsNavDrawer}
          closeMenu={() => closeMenu()}
        />
      )}
    </>
  );
}
