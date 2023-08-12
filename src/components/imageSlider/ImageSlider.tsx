import { createSignal, For } from 'solid-js';

import ImageSliderArrows from './ImageSliderArrows';

export default function ImageSlider(props: {
  slides: {
    pic: string;
    name: string;
  }[];
}) {
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
    <div class='flex justify-center my-8'>
      <div class='flex z-0 rounded-3xl overflow-hidden relative aspect-[4/3] mobile:w-[80vw] w-[70vw] md:w-[60vw] lg:w-[35vw] max-w-[700px]'>
        <div
          onTransitionEnd={() => {
            if (direction()) {
              document
                .querySelector('.slider')!
                .appendChild(
                  document.querySelector('.slider')!.firstElementChild as Node
                );
            } else {
              document
                .querySelector('.slider')!
                .prepend(
                  document.querySelector('.slider')!.lastElementChild as Node
                );
            }
            setIsTransition(false);
            setIsTranslate(false);
            setTimeout(() => setIsTransition(true));
            clearInterval(timer);
            setTimeout(() => {
              timer = setInterval(goToNext, 4000);
            }, 4000);
          }}
          class={`slider flex justify-start duration-1000 -translate-x-[100%]
          ${isTransition() ? 'transition-all' : 'transition-none'}`}
          classList={{
            '-translate-x-[200%]': isTranslate() && direction(),
            'translate-x-0': isTranslate() && !direction(),
          }}
        >
          <For each={props.slides}>
            {(item) => (
              <img
                src={item.pic}
                class='w-full h-full rounded-3xl'
                alt={`Picture of ${item.name}`}
              />
            )}
          </For>
        </div>
        <ImageSliderArrows
          gotoPrev={() => goToPrev()}
          goToNext={() => goToNext()}
        />
      </div>
    </div>
  );
}
