import { UpArrow } from '../assets/icons/Icons';

export default function ToTopButton(props: { darkTheme: boolean }) {
  return (
    <div
      class={`flex items-center justify-center fixed bottom-10 right-5 w-[45px] h-[45px] opacity-60 ${
        props.darkTheme ? 'bg-[#ffffff] text-black' : 'bg-[#000000] text-white'
      } rounded-md cursor-pointer hover:opacity-100`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {<UpArrow />}
    </div>
  );
}
