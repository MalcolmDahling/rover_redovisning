'use client';

import { useKeenSlider } from 'keen-slider/react';
import Slide from './Slide/Slide';
import 'keen-slider/keen-slider.min.css';
import { SliderStyle } from './Slider.css';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MenuAtom } from '@/atoms/MenuAtom';
import { data } from './SlideData';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';

export default function Slider() {
  const [menuAtom, setMenuAtom] = useRecoilState(MenuAtom);
  const moveToSlideAtom = useRecoilValue(MoveToSlideAtom);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    slides: {
      perView: 1,
    },

    slideChanged(s) {
      const index = s.track.details.rel;

      setMenuAtom(index === 0 ? 'home' : index === 1 ? 'company' : index === 2 ? 'references' : 'contact');
    },
  });

  useEffect(() => {
    console.log('slider', moveToSlideAtom);
    if (!slider.current) return;

    slider.current?.moveToIdx(moveToSlideAtom.index, true);
  }, [moveToSlideAtom]);

  return (
    <main
      ref={sliderRef}
      className={`keen-slider ${SliderStyle()}`}
    >
      {data.map((item, i) => (
        <Slide
          key={i}
          {...item}
        ></Slide>
      ))}
    </main>
  );
}
