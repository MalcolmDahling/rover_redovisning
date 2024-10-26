import { MenuAtom } from '@/atoms/MenuAtom';
import { useRecoilState } from 'recoil';
import { MenuDesktopContainerStyle } from './MenuDesktop.css';
import MenuDesktopButton from './MenuDesktopButton/MenuDesktopButton';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';

export default function MenuDesktop() {
  const [menuAtom, setMenuAtom] = useRecoilState(MenuAtom);
  const [moveToSlideAtom, setMoveToSlideAtom] = useRecoilState(MoveToSlideAtom);

  function handleClick(index: number) {
    setMoveToSlideAtom({ index: index, date: Date.now() });
  }

  return (
    <div className={MenuDesktopContainerStyle()}>
      <MenuDesktopButton
        text="HEM"
        selected={menuAtom === 'home'}
        onClick={() => {
          handleClick(0);
        }}
      ></MenuDesktopButton>

      <MenuDesktopButton
        text="FÖRETAGET"
        selected={menuAtom === 'company'}
        onClick={() => handleClick(1)}
      ></MenuDesktopButton>

      <MenuDesktopButton
        text="VÅRA TJÄNSTER"
        selected={menuAtom === 'services'}
        onClick={() => handleClick(2)}
      ></MenuDesktopButton>

      <MenuDesktopButton
        text="REFERENSER"
        selected={menuAtom === 'references'}
        onClick={() => handleClick(3)}
      ></MenuDesktopButton>

      <MenuDesktopButton
        text="KONTAKT"
        selected={menuAtom === 'contact'}
        onClick={() => handleClick(4)}
      ></MenuDesktopButton>
    </div>
  );
}
