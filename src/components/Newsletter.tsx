export default function Newsletter() {
  return (
    <>
      <p class='font-bold text-4xl'>Newsletter</p>
      <p>Get timely updates from your favourite cats.</p>
      <div class='w-full flex justify-center'>
        <input
          type='text'
          class='py-1 pl-2 w-[40%]'
          placeholder='Enter your email here'
        ></input>
      </div>
    </>
  );
}
