// app/api/user/update-profile/route.ts
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/options';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  const data = await req.json();

  const updatedUser = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: data.name,
      email: data.email
    }
  });

  return Response.json(updatedUser);
}