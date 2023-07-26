import { Show } from 'solid-js';
import { Moon, Sun } from '../../assets/icons/Icons';

export default function ThemeToggleIcon(props: {
  toggleTheme: () => void;
  darkTheme: boolean;
}) {
  return (
    <div class='pr-4 flex flex-row space-x-4'>
      <div
        onClick={() => {
          props.toggleTheme();
          localStorage.setItem('lightMode', props.darkTheme ? 'dark' : 'light');
        }}
        class='hover:cursor-pointer'
      >
        <Show when={!props.darkTheme} fallback={<Sun />}>
          <Moon />
        </Show>
      </div>
    </div>
  );
}
