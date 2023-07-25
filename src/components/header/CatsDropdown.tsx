import { A } from '@solidjs/router';

export default function CatsDropdown() {
  return (
    <div class='absolute w-[100px] top-full shadow-xl flex flex-col text-black bg-[#f1f1f1] z-[10]'>
      <A class='dropdown-content' href='/cats'>
        Our Cats
      </A>
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
  );
}
