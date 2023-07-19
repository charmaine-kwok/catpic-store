export default function CatItem(props: {
  name: string;
  pic: string;
  desc: string;
}) {
  return (
    <div class='flex flex-col justify-center items-center'>
      <p>{props.name}</p>
      <div class='relative group mt-2'>
        <img src={props.pic} class='hover:opacity-20 group-hover:opacity-20' />
        <p class='picDes group-hover:scale-100 group text-black'>
          {props.desc}
        </p>
      </div>
    </div>
  );
}
