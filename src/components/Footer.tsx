import { A } from '@solidjs/router';

import {
  Facebook,
  Instagram,
  Address,
  Phone,
  Email,
} from '../assets/icons/Icons';
import toTop from '../functions/toTop';

export default function Footer() {
  return (
    <div class='py-4'>
      <div class='flex flex-col items-center text-center justify-center'>
        <p class='font-bold italic text-xl my-4'>
          Our cats may have 9 lives, but their cuteness is infinite.
        </p>
        <p class='font-bold text-xl my-8'>Contact Us</p>
        <div class='footer-contact-item mb-2'>
          <Address />
          <p>Purrfect Place, Cat City, Canada</p>
        </div>
        <div class='flex flex-row divide-x divide-current'>
          <div class='footer-contact-item'>
            <Phone />
            <p>555-CAT-PURR</p>
          </div>
          <div class='footer-contact-item'>
            <Email />
            <a
              href='mailto:meow@catmail.com'
              class='hover:text-blue-500 hover:underline'
            >
              meow@catmail.com
            </a>
          </div>
        </div>
        <div class='my-4 flex flex-row space-x-2'>
          <div class='bg-blue-500 rounded-full p-2'>
            <Facebook />
          </div>
          <div class='bg-red-400 rounded-full p-2'>
            <Instagram />
          </div>
        </div>
      </div>

      <div class='flex flex-row justify-center'>
        <div class='grid grid-cols-2 gap-8 p-4 '>
          <div class='flex flex-col p-2 space-y-1'>
            <p class='font-bold text-xl mb-4 border-b-2 border-current pb-2 w-[180px]'>
              Cats
            </p>
            <A href='/cats' onClick={toTop} class='hover:underline'>
              Our Cats
            </A>
            <A href='/cats/Straight' onClick={toTop} class='hover:underline'>
              Straight
            </A>
            <A href='/cats/Cook' onClick={toTop} class='hover:underline'>
              Cook
            </A>
            <A href='/cats/Ball' onClick={toTop} class='hover:underline'>
              Ball
            </A>
            <A href='/cats/July' onClick={toTop} class='hover:underline'>
              July
            </A>
            <A href='https://en.wikipedia.org/wiki/Cat' class='hover:underline'>
              About Cats
            </A>
          </div>

          <div class='flex flex-col p-2'>
            <p class='font-bold text-xl mb-4 border-b-2 border-current pb-2 w-[180px]'>
              Support Cats
            </p>
            <div class='flex flex-col space-y-1'>
              <A href='https://www.spca.org.hk' class='hover:underline'>
                SPCA
              </A>
              <A
                href='https://www.facebook.com/housejoymercy/?locale=zh_HK'
                class='hover:underline'
              >
                阿棍屋
              </A>
              <A href='https://www.petwithyouhk.com' class='hover:underline'>
                連寵拯救隊
              </A>
            </div>
          </div>
        </div>
      </div>
      <div class='flex md:justify-end justify-center md:pr-8 pr-0'>
        <p>
          Copyright @ {new Date().getFullYear()} C. Kwok. All rights reserved.
        </p>
      </div>
    </div>
  );
}
