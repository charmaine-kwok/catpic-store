import straight from '../assets/catpics/straight.jpg';
import cook from '../assets/catpics/cook.jpg';
import ball from '../assets/catpics/ball.jpg';
import july from '../assets/catpics/july.jpg';
import CatItem from '../components/cats/CatItem';

export default function Cats() {
  return (
    <div class='flex flex-col items-center'>
      <div class='flex text-center my-6 px-4'>
        <p>Curious about our fabulous felines? Click a cat to learn more!</p>
      </div>

      <div class='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[90%]'>
        <CatItem
          name='Straight'
          pic={straight}
          desc={'This is Straight!\nShe is a good meow!'}
        />
        <CatItem
          name='Cook'
          pic={cook}
          desc={'This is Cook! \n She is a good meow!'}
        />
        <CatItem name='Ball' pic={ball} desc={'This is Ball.'} />
        <CatItem name='July' pic={july} desc={'This is July.'} />
      </div>
    </div>
  );
}
