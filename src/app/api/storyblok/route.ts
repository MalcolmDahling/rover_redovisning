import { NextResponse } from 'next/server';
const StoryblokClient = require('storyblok-js-client');

export async function GET() {
  const storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  });

  try {
    /*prettier-ignore*/
    const [contact_information, footer, logo, slides, website_name] = await Promise.all([
      storyblok.get('cdn/stories', { starts_with: 'contact-information' }),
      storyblok.get('cdn/stories', { starts_with: 'footer' }),
      storyblok.get('cdn/stories', { starts_with: 'logo' }),
      storyblok.get('cdn/stories', { starts_with: 'slides' }),
      storyblok.get('cdn/stories', { starts_with: 'website-name' }),
    ]);

    const arr: any[] = [];

    slides.data.stories.forEach((item: any) => {
      arr.push({
        ...item.content,
        background_image: item.content.background_image.filename,
        image: item.content.image.filename,
        order: parseInt(item.content.order),
      });
    });

    arr.sort((a, b) => a.order - b.order);

    const stories = {
      contact_information: contact_information.data.stories[0].content,

      footer: {
        ...footer.data.stories[0].content,
        visit_us: footer.data.stories[0].content.visit_us.map((item: any) => {
          return {
            link: item.link,
            name: item.name,
            image: item.image.filename,
          };
        }),
      },

      logo: logo.data.stories[0].content,
      slides: arr,
      website_name: website_name.data.stories[0].content,
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
