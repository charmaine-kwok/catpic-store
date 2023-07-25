import { UpArrow } from '../assets/icons/Icons';
import toTop from './functions/toTop';

export default function ToTopButton(props: { darkTheme: boolean }) {
  return (
    <div
      class={`flex items-center justify-center fixed bottom-20 right-5 w-[45px] h-[45px] opacity-60 ${
        props.darkTheme ? 'bg-[#ffffff] text-black' : 'bg-[#000000] text-white'
      } rounded-md cursor-pointer hover:opacity-100`}
      onClick={toTop}
    >
      {<UpArrow size={35} />}
    </div>
  );
}
