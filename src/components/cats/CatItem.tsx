import { A } from '@solidjs/router';
import LazyImage from '../LazyImage';

export default function CatItem(props: {
  name: string;
  desc: string;
  smallPic: string;
  actualPic: string;
}) {
  return (
    <div class='flex flex-col justify-center'>
      <p class='text-center h-[10%]'>{props.name}</p>
      <A href={`/cats/${props.name}`} class='h-[90%] relative group mt-2'>
        <LazyImage
          smallPic={props.smallPic}
          actualPic={props.actualPic}
          name={props.name}
        />
        <p class='picDes group-hover:scale-100 group'>{props.desc}</p>
      </A>
    </div>
  );
}
