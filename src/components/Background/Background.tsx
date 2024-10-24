import { useRecoilState } from 'recoil';
import { BackgroundStyle } from './Background.css';
import { MenuAtom } from '@/atoms/MenuAtom';

export default function Background() {
  const [menuAtom, setMenuAtom] = useRecoilState(MenuAtom);

  return (
    <img
      src="/images/background.jpg"
      className={BackgroundStyle({ hueRotate: menuAtom })}
    ></img>
  );
}
