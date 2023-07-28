import { createSignal } from 'solid-js';

const LazyImage = (props: {
  smallPic: string;
  actualPic: string;
  name: string;
}) => {
  const [loaded, setLoaded] = createSignal(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      {!loaded() && (
        <img
          src={props.smallPic}
          alt={`Loading picture of ${props.name}`}
          class='w-full h-full'
          style={{ filter: 'blur(10px)' }}
        />
      )}
      <img
        src={props.actualPic}
        alt={`Picture of ${props.name}`}
        class='w-full h-full hover:opacity-20 group-hover:opacity-20'
        style={{ display: loaded() ? 'block' : 'none' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default LazyImage;
