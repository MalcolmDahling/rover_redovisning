import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log(req);

  try {
    revalidatePath('/');

    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
  }
}
