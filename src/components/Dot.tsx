export default function Dot(props: {
  goToSlide: (id: number) => void;
  index: number;
  activeSlide: number;
}) {
  return (
    <div
      class='cursor-pointer'
      onClick={() => {
        props.goToSlide(props.index);
      }}
      classList={{
        'brightness-150': props.activeSlide === props.index,
      }}
    >
      ●
    </div>
  );
}
