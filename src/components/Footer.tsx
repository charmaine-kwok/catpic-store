import { A } from '@solidjs/router';

import {
  Facebook,
  Instagram,
  Address,
  Phone,
  Email,
} from '../assets/icons/Icons';

function toTop() {
  window.scrollTo(0, 0);
}

export default function Footer() {
  return (
    <div class='grid grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
      <div class='flex flex-col p-2'>
        <p class='font-bold text-xl mb-4'>CatPic.</p>
        <p>Our cats may have 9 lives, but their cuteness is infinite.</p>
        <div class='flex flex-row space-x-2 mt-2'>
          <div class='bg-blue-500 rounded-full p-2'>
            <Facebook />
          </div>
          <div class='bg-red-400 rounded-full p-2'>
            <Instagram />
          </div>
        </div>
      </div>

      <div class='flex flex-col p-2'>
        <p class='font-bold text-xl mb-4'>Useful Links</p>
        <div class='flex flex-col space-y-2'>
          <A href='/' onClick={() => toTop()}>
            <p>Home</p>
          </A>
          <A href='/cats' onClick={() => toTop()}>
            <p>Cats</p>
          </A>
          <A href='https://en.wikipedia.org/wiki/Cat'>
            <p>About Cat</p>
          </A>
        </div>
      </div>

      <div class='flex flex-col p-2'>
        <p class='font-bold text-xl mb-4'>Contact Us</p>
        <div class='flex flex-col space-y-2'>
          <div class='flex flex-row space-x-2'>
            <Address />
            <p>Purrfect Place, Cat City, Canada</p>
          </div>
          <div class='flex flex-row space-x-2'>
            <Phone />
            <p>555-CAT-PURR</p>
          </div>
          <div class='flex flex-row space-x-2'>
            <Email />
            <a href='mailto:meow@catmail.com'>meow@catmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
