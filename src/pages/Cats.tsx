import straight from '../assets/catpics/straight.jpg';
import cook from '../assets/catpics/cook.jpg';
import ball from '../assets/catpics/ball.jpg';
import july from '../assets/catpics/july.jpg';

export default function Cats() {
  return (
    <div class='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between px-2 my-4'>
      <div class='flex flex-col justify-center items-center'>
        <p>Straight</p>
        <img src={straight} />
      </div>
      <div class='flex flex-col justify-center items-center'>
        <p>Cook</p>
        <img src={cook} />
      </div>
      <div class='flex flex-col justify-center items-center'>
        <p>Ball</p>
        <img src={ball} />
      </div>
      <div class='flex flex-col justify-center items-center'>
        <p>July</p>
        <img src={july} />
      </div>
    </div>
  );
}
