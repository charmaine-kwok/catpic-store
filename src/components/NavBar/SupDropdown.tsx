import { A } from '@solidjs/router';

export default function SupDropdown() {
  return (
    <div class='absolute w-[100px] top-full shadow-xl flex flex-col text-black bg-[#f1f1f1] z-[10]'>
      <SupDropdownContent />
    </div>
  );
}

export function SupDropdownContent() {
  return (
    <>
      <A class='dropdown-content' href='https://www.spca.org.hk'>
        SPCA
      </A>
      <A
        class='dropdown-content'
        href='https://www.facebook.com/housejoymercy/?locale=zh_HK'
      >
        阿棍屋
      </A>
      <A class='dropdown-content' href='https://www.petwithyouhk.com'>
        連寵拯救隊
      </A>
    </>
  );
}
