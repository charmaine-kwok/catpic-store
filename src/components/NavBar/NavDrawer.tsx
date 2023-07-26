import { Setter, Show, onCleanup } from 'solid-js';

import { DownArrow, UpArrow } from '../../assets/icons/Icons';
import { SupDropdownContent } from './SupDropdown';
import { CatsDropdownContent } from './CatsDropdown';

declare module 'solid-js/jsx-runtime' {
  namespace JSX {
    interface Directives {
      clickOutside: any;
    }
  }
}

export default function NavDrawer(props: {
  darkTheme: boolean;
  showCatsItems: boolean;
  setShowCatsItems: Setter<boolean>;
  showSupItems: boolean;
  setShowSupItems: Setter<boolean>;
  isNavDrawer: boolean;
  setIsNavDrawer: Setter<boolean>;
  closeMenu: () => void;
}) {
  function closeMenu() {
    props.setShowCatsItems(false);
    props.setShowSupItems(false);
    props.setIsNavDrawer(!props.isNavDrawer);
  }

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

  return (
    <div
      use:clickOutside={clickOutside}
      id='navDrawer'
      class='md:hidden flex flex-col absolute w-full cursor-pointer shadow-2xl'
      classList={{
        'bg-white': !props.darkTheme,
        'bg-black': props.darkTheme,
      }}
    >
      <div
        class='flex flex-row items-center p-2 space-x-2'
        classList={{ 'bg-[#acabab]': props.showCatsItems }}
        onClick={() => {
          props.setShowCatsItems(!props.showCatsItems);
        }}
      >
        <p>Cats</p>
        <Show when={props.showCatsItems} fallback={<DownArrow />}>
          <UpArrow size={12} />
        </Show>
      </div>
      {props.showCatsItems && (
        <div class='pl-6 flex flex-col font-medium' onClick={props.closeMenu}>
          <CatsDropdownContent />
        </div>
      )}

      <div
        class='flex flex-row items-center p-2 space-x-2'
        classList={{ 'bg-[#acabab]': props.showSupItems }}
        onClick={() => {
          props.setShowSupItems(!props.showSupItems);
        }}
      >
        <p>Support Cats</p>
        <Show when={props.showSupItems} fallback={<DownArrow />}>
          <UpArrow size={12} />
        </Show>
      </div>
      {props.showSupItems && (
        <div class='pl-6 flex flex-col font-medium'>
          <SupDropdownContent />
        </div>
      )}
    </div>
  );
}
