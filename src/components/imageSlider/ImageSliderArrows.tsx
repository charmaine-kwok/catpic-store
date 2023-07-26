export default function ImageSliderArrows(props: {
  gotoPrev: () => void;
  goToNext: () => void;
}) {
  return (
    <div class='absolute flex justify-between items-center w-full h-full text-white'>
      <div class='arrow text-6xl bg-[rgb(0,0,0,0.3)] p-1'>
        <div onClick={props.gotoPrev} class='cursor-pointer'>
          ❰
        </div>
      </div>

      <div class='arrow text-6xl bg-[rgb(0,0,0,0.3)] p-1'>
        <div onClick={props.goToNext} class='cursor-pointer'>
          ❱
        </div>
      </div>
    </div>
  );
}
