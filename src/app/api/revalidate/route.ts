'use server';

import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function revalidate(req: NextRequest) {
  const res = NextResponse;

  try {
    await revalidatePath('/');

    return NextResponse.json({ message: 'Revalidation successful' }, { status: 200 });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 });
  }
}
