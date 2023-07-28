import july from '../assets/catpics/actual/july.jpg';
import CatDetails from '../components/cats/CatDetails';

export default function July() {
  return (
    <CatDetails
      pic={july}
      heading='Meet July - a black and white long-haired cat.'
      desc={
        <>
          <p>
            Probably born in May 2018. We adopted her in July, and since she was
            named after the month we brought her home.
          </p>
          <br />
          <p>
            July is a bit of a silly cat, not the cleverest feline you'll ever
            meet, but she more than makes up for it with her playful and
            affectionate nature. She's also very vocal, especially when it's
            mealtime - she'll meow incessantly until she's fed.
          </p>
          <br />
          <p>
            July shares her home with her three feline siblings - Straight,
            Cook, and Ball - although she's not particularly close with any of
            them. However, she does have a special bond with Straight and always
            tries to stay close to her.
          </p>
          <br />
          <p>
            Unfortunately, July has had a few incidents with Ball in the past,
            and she's been known to provoke her feline sibling to the point
            where she's been injured. Despite this, July is still a beloved
            member of our family, and we're always careful to keep an eye on her
            interactions with the other cats.
          </p>
          <br />
          <p>
            One of July's favorite treats is cat biscuits, which she'll happily
            munch on whenever she gets the chance. She's also known by the
            nickname "Ar B" - a cute and affectionate moniker that suits her
            perfectly.
          </p>
        </>
      }
      catName='July'
    />
  );
}
