import { MenuAtom } from '@/atoms/MenuAtom';
import { useRecoilState } from 'recoil';
import { MenuDesktopContainerStyle } from './MenuDesktop.css';
import MenuDesktopButton from './MenuDesktopButton/MenuDesktopButton';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';
import { StoryblokType } from '@/types/storyblok';

export default function MenuDesktop(props: { slides: StoryblokType['slides'] }) {
  const [menuAtom, setMenuAtom] = useRecoilState(MenuAtom);
  const [moveToSlideAtom, setMoveToSlideAtom] = useRecoilState(MoveToSlideAtom);

  function handleClick(index: number) {
    setMoveToSlideAtom({ index: index, date: Date.now() });
  }

  return (
    <div className={MenuDesktopContainerStyle()}>
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
    </div>
  );
}
