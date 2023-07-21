import { createSignal } from 'solid-js';

export default function ImageSlider(props: { slides: any[] }) {
  const [activeSlide, setActiveSlide] = createSignal(0);

  function goToNext() {
    setActiveSlide((prev) => (prev === props.slides.length - 1 ? 0 : prev + 1));
    // setActiveSlide((prev) => prev + 1);
  }
  function goToPrev() {
    setActiveSlide((prev) => (prev === 0 ? props.slides.length - 1 : prev - 1));
    // setActiveSlide((prev) => prev - 1);
  }

  let timer = setInterval(() => {
    goToNext();
  }, 4000);

  return (
    <div class='imageSlider flex-col h-full w-full justify-start'>
      <div class='overflow-hidden relative imageSlider max-h-[380px] h-[80vh] max-w-[500px] w-[80vw]'>
        <div
          class={`relative flex translate-x-[${
            -100 * activeSlide()
          }%] transition-all duration-700`}
        >
          {props.slides.map((item) => (
            <img
              src={item.pic}
              class='min-w-full min-h-full rounded-3xl object-cover'
            />
          ))}
        </div>

        <div class='absolute flex justify-between items-center w-full h-full text-white'>
          <div>
            <div class='arrow text-6xl bg-[rgb(0,0,0,0.3)] p-1'>
              <div
                onClick={() => {
                  goToPrev();
                  clearInterval(timer);
                  setInterval(() => {
                    goToNext();
                  }, 4000);
                }}
                class='cursor-pointer'
              >
                ❰
              </div>
            </div>
          </div>
          <div class=''>
            <div class='arrow text-6xl bg-[rgb(0,0,0,0.3)] p-1'>
              <div
                onClick={() => {
                  goToNext();
                  clearInterval(timer);
                  setInterval(() => {
                    goToNext();
                  }, 4000);
                }}
                class='cursor-pointer'
              >
                ❱
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
