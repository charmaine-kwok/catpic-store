import { JSX } from 'solid-js';

export default function CatDetails(props: {
  pic: string;
  heading: string;
  desc: JSX.Element;
}) {
  return (
    <div class='grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full'>
      <div class='p-8'>
        <img src={props.pic} />
      </div>
      <div class='p-8 h-full flex flex-col justify-center'>
        <p class='font-bold mb-2'>{props.heading}</p>
        {props.desc}
      </div>
    </div>
  );
}
