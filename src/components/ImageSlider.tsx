import { createSignal } from 'solid-js';

export default function ImageSlider(props: { slides: any[] }) {
  const [slideNum, setSlideNum] = createSignal(0);
  function goToSlide(id: number) {
    setSlideNum(id);
  }

  return (
    <div class='imageSlider flex-col h-full justify-start'>
      <p class='font-bold text-2xl'>{props.slides[slideNum()].name}</p>
      <div class='imageSlider'>
        <div class='arrow'>
          <div
            onClick={() => {
              setSlideNum((prev) =>
                prev === 0 ? props.slides.length - 1 : prev - 1
              );
            }}
            class='cursor-pointer'
          >
            ❰
          </div>
        </div>
        <div class='flex items-center justify-center h-[380px] w-[500px]'>
          <img
            src={props.slides[slideNum()].pic}
            class='w-full h-full rounded-3xl'
          />
        </div>
        <div class='arrow'>
          <div
            onClick={() => {
              setSlideNum((prev) =>
                prev === props.slides.length - 1 ? 0 : prev + 1
              );
            }}
            class='cursor-pointer'
          >
            ❱
          </div>
        </div>
      </div>
      <div class='flex flex-row space-x-2 justify-center text-[#918d8d]'>
        {props.slides.map((_, index) => (
          <div class='cursor-pointer' onClick={() => goToSlide(index)}>
            ●
          </div>
        ))}
      </div>
    </div>
  );
}
