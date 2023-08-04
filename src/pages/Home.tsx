import straight from '../assets/catpics/actual/straight.jpg';
import cook from '../assets/catpics/actual/cook.jpg';
import ball from '../assets/catpics/actual/ball.jpg';
import july from '../assets/catpics/actual/july.jpg';
import ImageSlider from '../components/imageSlider/ImageSlider';

export default function Home() {
  const slides: {
    pic: string;
    name: string;
  }[] = [
    { pic: july, name: 'July' },
    { pic: straight, name: 'Straight' },
    { pic: cook, name: 'Cook' },
    { pic: ball, name: 'Ball' },
  ];
  return (
    <>
      <div class='flex justify-center my-4'>
        <p class='whitespace-pre-wrap text-justify px-8'>
          Welcome to the delightful world of four charming felines - Straight,
          Cook, Ball, and July!\nThis page is dedicated to celebrating the
          unique personalities and lovable quirks of these four fabulous
          cats.\nJoin us as we explore their adventures and share their adorable
          moments with the world.
        </p>
      </div>
      <ImageSlider slides={slides} />
    </>
  );
}
