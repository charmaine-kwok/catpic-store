import { createSignal } from 'solid-js';

const LazyImage = (props: {
  smallPic: string;
  actualPic: string;
  name: string;
}) => {
  const [loaded, setLoaded] = createSignal(false);

  return (
    <div>
      {!loaded() && (
        <img
          src={props.smallPic}
          alt={`Loading picture of ${props.name}`}
          class='w-full h-full'
          classList={{ 'blur-md': !loaded() }}
        />
      )}
      <img
        src={props.actualPic}
        alt={`Picture of ${props.name}`}
        class='w-full h-full hover:opacity-20 group-hover:opacity-20'
        style={{ display: loaded() ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
