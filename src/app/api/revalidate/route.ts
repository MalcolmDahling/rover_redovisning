import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log(req);

  revalidatePath('/');

  return NextResponse.json({ revalidated: true }, { status: 200 });
}
