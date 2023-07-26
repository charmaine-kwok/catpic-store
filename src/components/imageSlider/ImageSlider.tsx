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
    <div class='imageSlider flex-col h-full w-full justify-start'>
      <div class='overflow-hidden relative imageSlider max-h-[380px] h-[80vh] max-w-[500px] w-[80vw]'>
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
          class={`relative justify-start slider flex duration-1000 -translate-x-[100%]
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
                class='w-[100%] h-[100%] rounded-3xl object-cover'
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
