export const revalidate = 30;

import { NextResponse } from 'next/server';
const StoryblokClient = require('storyblok-js-client');

export async function GET() {
  const storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  });

  try {
    /*prettier-ignore*/
    const [menu, slides, footer] = await Promise.all([
      storyblok.get('cdn/stories', { starts_with: 'meny' }),
      storyblok.get('cdn/stories', { starts_with: 'slides' }),
      storyblok.get('cdn/stories', { starts_with: 'sidfot' }),
    ]);

    const stories = {
      menu: menu.data.stories,
      slides: slides.data.stories,
      footer: footer.data.stories,
    };

    return new NextResponse(JSON.stringify(stories), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify({ error: 'Failed to fetch data from Storyblok' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
