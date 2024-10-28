'use server';

import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    revalidatePath('/');

    return NextResponse.json({ message: 'Revalidation successful' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 });
  }
}
