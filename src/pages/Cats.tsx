import straight from '../assets/catpics/actual/straight.jpg';
import smallStraight from '../assets/catpics/small/straight-small.jpg';
import cook from '../assets/catpics/actual/cook.jpg';
import smallCook from '../assets/catpics/small/cook-small.jpg';
import ball from '../assets/catpics/actual/ball.jpg';
import smallBall from '../assets/catpics/small/ball-small.jpg';
import july from '../assets/catpics/actual/july.jpg';
import smallJuly from '../assets/catpics/small/july-small.jpg';
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
          actualPic={straight}
          smallPic={smallStraight}
          desc={'This is Straight!\nShe is a good meow!'}
        />
        <CatItem
          name='Cook'
          actualPic={cook}
          smallPic={smallCook}
          desc={'This is Cook! \n She is a good meow!'}
        />
        <CatItem
          name='Ball'
          actualPic={ball}
          smallPic={smallBall}
          desc={'This is Ball.'}
        />
        <CatItem
          name='July'
          actualPic={july}
          smallPic={smallJuly}
          desc={'This is July.'}
        />
      </div>
    </div>
  );
}
