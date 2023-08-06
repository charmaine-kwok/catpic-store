import { A } from '@solidjs/router';

export default function NotFound() {
  return (
    <div class='flex items-center justify-center h-[100vh]'>
      <div class='text-center space-y-4'>
        <p class='text-8xl font-extrabold'>404</p>
        <p class='text-3xl font-semibold'>Opps! Page not found!</p>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <button onKeyPress={() => {}} class='border-current bg-transparent'>
          <A href='/'>
            <p>Return Home</p>
          </A>
        </button>
      </div>
    </div>
  );
}
