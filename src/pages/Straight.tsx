import straight from '../assets/catpics/straight.jpg';
import CatDetails from '../components/cats/CatDetails';

export default function Straight() {
  return (
    <CatDetails
      pic={straight}
      heading='Meet Straight - a beautiful and friendly girl who loves to sleep, eat,
    and spend time with her family.'
      desc={
        <>
          <p>
            Born on July 22, 2010, she's been a beloved member of our household
            for over a decade. Straight shares her home with her sister, Cook,
            and two other feline companions Ball and July, although she's not
            particularly fond of them.
          </p>
          <br />
          <p>
            Straight has a sweet and affectionate nature, and she's not afraid
            to show it! She loves meeting new people and welcomes strangers with
            open paws, always happy to be petted and cuddled. Her favorite
            pastime, however, is sleeping - she can often be found dozing in a
            cozy spot, dreaming sweet kitty dreams.
          </p>
          <br />
          <p>
            When she's not napping, Straight loves to eat - she's a big fan of
            all kinds of food, especially treats. She's also happy to share her
            food with her sister, Cook, with whom she has a very close bond. The
            two of them spend a lot of time together, grooming each other and
            cuddling up for naps.
          </p>
          <br />
          <p>
            While she may not be the biggest fan of Ball and July, Straight is
            still a happy and contented member of our feline family. She brings
            us endless joy with her friendly nature and playful antics, and
            we're so grateful to have her in our lives.
          </p>
        </>
      }
    />
  );
}
