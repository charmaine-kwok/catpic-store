import { createSignal, For, onMount, onCleanup } from 'solid-js';

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
  const [goBack, setGoBack] = createSignal(false);

  onMount(() => autoNext());
  onCleanup(() => clearInterval(timer));

  function goToNext() {
    resetAutoSlide();
    setIsTranslate(true);
    setDirection(true);
  }

  function goToPrev() {
    if (isTranslate()) {
      setIsTranslate(false);
      setGoBack(true);
    } else {
      setIsTranslate(true);
    }
    resetAutoSlide();
    setDirection(false);
  }

  let timer: NodeJS.Timeout;
  function autoNext() {
    timer = setInterval(() => {
      setIsTranslate(true);
      setDirection(true);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(timer);
    autoNext();
  }

  return (
    <div class='flex justify-center my-8'>
      <div class='flex z-0 rounded-3xl overflow-hidden relative aspect-[4/3] mobile:w-[80vw] w-[70vw] md:w-[60vw] lg:w-[35vw] max-w-[700px]'>
        <div
          onTransitionEnd={() => {
            if (!goBack()) {
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
            }
            setGoBack(false);
            setIsTransition(false);
            setIsTranslate(false);
            setTimeout(() => setIsTransition(true));
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
