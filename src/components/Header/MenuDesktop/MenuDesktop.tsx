import { MenuAtom } from '@/atoms/MenuAtom';
import { MenuDesktopContainerStyle } from './MenuDesktop.css';
import MenuDesktopButton from './MenuDesktopButton/MenuDesktopButton';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';
import { StoryblokType } from '@/types/storyblok';
import { useAtom } from 'jotai';

export default function MenuDesktop(props: { slides: StoryblokType['slides'] }) {
  const [menuAtom, setMenuAtom] = useAtom(MenuAtom);
  const [moveToSlideAtom, setMoveToSlideAtom] = useAtom(MoveToSlideAtom);

  function handleClick(index: number) {
    setMoveToSlideAtom({ index: index, date: Date.now() });
  }

  return (
    <nav className={MenuDesktopContainerStyle()}>
      {props.slides.map((item) => (
        <MenuDesktopButton
          key={item.menu_title}
          text={item.menu_title}
          selected={menuAtom === item.menu_title}
          onClick={() => {
            handleClick(item.order);
          }}
        ></MenuDesktopButton>
      ))}
    </nav>
  );
}
