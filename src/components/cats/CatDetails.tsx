import { JSX } from 'solid-js';

export default function CatDetails(props: {
  pic: string;
  heading: string;
  desc: JSX.Element;
  catName: string;
}) {
  return (
    <div class='grid grid-cols-1 md:grid-cols-2 justify-center items-center h-[100%]'>
      <div class='flex justify-center p-8'>
        <img
          src={props.pic}
          class='md:h-auto h-[30vh] md:w-auto w-[40vh]'
          alt={`Picture of ${props.catName}`}
        />
      </div>
      <div class='md:p-8 px-8 h-full flex flex-col justify-center'>
        <p class='font-bold mb-2'>{props.heading}</p>
        {props.desc}
      </div>
    </div>
  );
}
