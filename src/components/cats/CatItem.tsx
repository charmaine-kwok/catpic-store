import { A } from '@solidjs/router';

export default function CatItem(props: {
  name: string;
  pic: string;
  desc: string;
}) {
  return (
    <div class='flex flex-col justify-center'>
      <p class='text-center h-[10%]'>{props.name}</p>
      <A href={`/cats/${props.name}`} class='h-[90%] relative group mt-2'>
        <img
          src={props.pic}
          class='w-full h-full hover:opacity-20 group-hover:opacity-20'
          alt={`Picture of ${props.name}`}
        />
        <p class='picDes group-hover:scale-100 group'>{props.desc}</p>
      </A>
    </div>
  );
}
