import { fontFace, globalStyle } from '@vanilla-extract/css';
import { Colors } from './variables';

export const ModernSansLight = fontFace({
  src: 'url("/fonts/ModernSans-Light.otf")',
});

globalStyle('html, body', {
  margin: 0,
  backgroundColor: Colors.black,
  overflowX: 'hidden',
});

globalStyle('*', {
  fontFamily: ModernSansLight,
});
