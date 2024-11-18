import { NextResponse } from 'next/server';
const StoryblokClient = require('storyblok-js-client');

function addSuffixToFilename(filename: string): string {
  // List of formats supported by Storyblok for .webp conversion
  const supportedExtensions = ['png', 'jpg', 'jpeg', 'gif'];

  // Extract the file extension and check if it's supported
  const extension = filename.split('.').pop()?.toLowerCase();
  if (!extension || !supportedExtensions.includes(extension)) {
    return filename; // Return the filename unchanged if it's not a supported format
  }

  if (filename.endsWith('/')) {
    return `${filename}m/`;
  }
  return `${filename}/m/`;
}

function modifyFilenames(obj: any): void {
  if (Array.isArray(obj)) {
    obj.forEach(modifyFilenames);
  } else if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (key === 'filename' && typeof obj[key] === 'string') {
        obj[key] = addSuffixToFilename(obj[key]);
      } else {
        modifyFilenames(obj[key]);
      }
    }
  }
}

export async function GET() {
  const storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  });

  try {
    /*prettier-ignore*/
    const [contact_information, footer, logo, slides, favicon, meta_data] = await Promise.all([
      storyblok.get('cdn/stories', { starts_with: 'contact-information', cv: +new Date() }),
      storyblok.get('cdn/stories', { starts_with: 'footer', cv: +new Date() }),
      storyblok.get('cdn/stories', { starts_with: 'logo', cv: +new Date() }),
      storyblok.get('cdn/stories', { starts_with: 'slides', cv: +new Date() }),
      storyblok.get('cdn/stories', { starts_with: 'favicon', cv: +new Date() }),
      storyblok.get('cdn/stories', { starts_with: 'meta-data', cv: +new Date() }),
    ]);

    const arr: any[] = [];

    slides.data.stories.forEach((item: any) => {
      arr.push({
        ...item.content,
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
      favicon: null,
      meta_data: meta_data.data.stories[0].content,
    };

    // Add "/m/" to images to make Storyblok convert them into .webp images
    modifyFilenames(stories);

    // Don't add "/m/" to favicons
    stories.favicon = favicon.data.stories[0].content;

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
