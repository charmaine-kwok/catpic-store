import { createSignal } from 'solid-js';
import Dot from './Dot';

export default function ImageSlider(props: { slides: any[] }) {
  const [activeSlide, setActiveSlide] = createSignal(0);
  function goToSlide(id: number) {
    setActiveSlide(id);
  }
  function goToNext() {
    setActiveSlide((prev) => (prev === props.slides.length - 1 ? 0 : prev + 1));
  }
  function goToPrev() {
    setActiveSlide((prev) => (prev === 0 ? props.slides.length - 1 : prev - 1));
  }

  setInterval(() => {
    goToNext();
  }, 4000);

  return (
    <div class='imageSlider flex-col h-full justify-start'>
      <p class='font-bold text-2xl'>{props.slides[activeSlide()].name}</p>
      <div class='imageSlider'>
        <div class='arrow'>
          <div onClick={() => goToPrev()} class='cursor-pointer'>
            ❰
          </div>
        </div>
        <div class='flex items-center justify-center max-h-[380px] max-w-[500px] w-[80vw]'>
          <img
            src={props.slides[activeSlide()].pic}
            class='w-full h-full rounded-3xl'
          />
        </div>
        <div class='arrow'>
          <div
            onClick={() => {
              goToNext();
            }}
            class='cursor-pointer'
          >
            ❱
          </div>
        </div>
      </div>
      <div class='flex flex-row space-x-2 justify-center text-[#918d8d]'>
        {props.slides.map((_, index) => (
          <Dot
            index={index}
            activeSlide={activeSlide()}
            goToSlide={goToSlide}
          />
        ))}
      </div>
    </div>
  );
}
