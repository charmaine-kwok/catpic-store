import cook from '../assets/catpics/cook.jpg';
import CatDetails from '../components/cats/CatDetails';

export default function Cook() {
  return (
    <CatDetails
      pic={cook}
      heading='Meet Cook - a beautiful girl who loves spending time with her sister,
    Straight, and is a bit shy around strangers.'
      desc={
        <>
          <p>
            Born on July 22, 2010, Cook was initially thought to be a boy until
            a recent visit to the vet revealed the truth!
          </p>
          <br />
          <p>
            Despite her initial shyness, Cook is actually quite friendly and
            loves to be around her family. She particularly adores her sister,
            Straight, and the two of them can often be found cuddled up
            together, grooming each other's fur and napping together on the
            sofa.
          </p>
          <br />
          <p>
            Cook shares her home with Straight and two other feline companions,
            Ball and July, although she's not the biggest fan of the latter two.
            However, despite her reservations, Cook is still a kind and caring
            cat, and she always makes sure to tell July off when she's meowing
            non-stop for food - with a distinctive "L" sound!
          </p>
          <br />
          <p>
            We're so lucky to have Cook as part of our family. Despite her
            shyness, she's a delightful and loving cat who brings us endless joy
            with her playful antics and affectionate nature.
          </p>
        </>
      }
      catName='Cook'
    />
  );
}
