import { createSignal } from 'solid-js';

export default function ImageSlider(props: { slides: any[] }) {
  const [isTranslate, setIsTranslate] = createSignal(false);
  const [isTransition, setIsTransition] = createSignal(true);
  const [direction, setDirection] = createSignal(true);

  function goToNext() {
    setIsTranslate(true);
    setDirection(true);
  }

  function goToPrev() {
    setIsTranslate(true);
    setDirection(false);
  }

  let timer = setInterval(goToNext, 4000);

  return (
    <div class='imageSlider flex-col h-full w-full justify-start'>
      <div class='overflow-hidden relative imageSlider max-h-[380px] h-[80vh] max-w-[500px] w-[80vw]'>
        <div
          onTransitionEnd={() => {
            if (direction()) {
              document
                .querySelector('.slider')!
                .appendChild(
                  document.querySelector('.slider')!.firstElementChild
                );
            } else {
              document
                .querySelector('.slider')!
                .prepend(document.querySelector('.slider')!.lastElementChild);
            }
            setIsTransition(false);
            setIsTranslate(false);
            setTimeout(() => setIsTransition(true));
            clearInterval(timer);
            setTimeout(() => {
              timer = setInterval(goToNext, 4000);
            }, 4000);
          }}
          class={`relative justify-start slider flex duration-1000
          -translate-x-[${
            100 +
            (isTranslate() && direction() ? 100 : 0) -
            (isTranslate() && !direction() ? 100 : 0)
          }%]
          ${isTransition() ? 'transition-all' : 'transition-none'} `}
        >
          {props.slides.map((item) => (
            <img
              src={item.pic}
              class='min-w-full min-h-full rounded-3xl object-cover'
            />
          ))}
        </div>
        <div class='absolute flex justify-between items-center w-full h-full text-white'>
          <div class='arrow text-6xl bg-[rgb(0,0,0,0.3)] p-1'>
            <div
              onClick={() => {
                goToPrev();
              }}
              class='cursor-pointer'
            >
              ❰
            </div>
          </div>

          <div class='arrow text-6xl bg-[rgb(0,0,0,0.3)] p-1'>
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
      </div>
    </div>
  );
}
