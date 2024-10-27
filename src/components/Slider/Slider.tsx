'use client';

import { useKeenSlider } from 'keen-slider/react';
import Slide from './Slide/Slide';
import 'keen-slider/keen-slider.min.css';
import { SliderStyle } from './Slider.css';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MenuAtom } from '@/atoms/MenuAtom';
import { MoveToSlideAtom } from '@/atoms/MoveToSlideAtom';
import { StoryblokType } from '@/types/storyblok';

export default function Slider(props: { slides: StoryblokType['slides'] }) {
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

      props.slides.forEach((item) => {
        if (index === item.order) {
          setMenuAtom(item.menu_title);
        }
      });
    },
  });

  useEffect(() => {
    if (!slider.current) return;

    slider.current?.moveToIdx(moveToSlideAtom.index, true);
  }, [moveToSlideAtom]);

  return (
    <main
      ref={sliderRef}
      className={`keen-slider ${SliderStyle()}`}
    >
      {props.slides.map((item, i) => (
        <Slide
          key={i}
          slide={item}
        ></Slide>
      ))}
    </main>
  );
}
