import ball from '../assets/catpics/ball.jpg';
import CatDetails from '../components/cats/CatDetails';

export default function Ball() {
  return (
    <CatDetails
      pic={ball}
      heading='Meet Ball - a smart and beautiful orange cat.'
      desc={
        <>
          <p>
            Adopted in May 2022 after noticing that her leg was hurt. While we
            don't know her exact birth date and year, we estimate that she's a
            few years old.
          </p>
          <br />
          <p>
            When we first brought Ball home, she was very nice and friendly.
            However, over time, she's become a bit more moody and unpredictable.
            She'll often meow for attention and affection, but then quickly
            become agitated and scratch or bite when she's had enough. She can
            also be quite demanding when it comes to her meals, becoming angry
            and aggressive if she's not fed on time.
          </p>
          <br />
          <p>
            Despite her sometimes difficult behavior, Ball is still an adorable
            and pretty cat. She shares her home with her three feline siblings -
            Straight, Cook, and July - although she's not particularly close
            with any of them. In fact, she's had a few fights with July in the
            past!
          </p>
          <br />
          <p>
            While Ball may have her quirks, we're still grateful to have her as
            part of our family. She's a unique and fascinating cat who keeps us
            on our toes with her unpredictable behavior.
          </p>
        </>
      }
    />
  );
}
