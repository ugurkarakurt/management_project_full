// app/api/user/update-image/route.ts
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../../auth/[...nextauth]/options';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { imageUrl } = await req.json();

  await prisma.user.update({
    where: { id: session.user.id },
    data: { image: imageUrl }
  });

  const updatedUser = await prisma.user.findUnique({
    where: { id: session.user.id }
  });

  return Response.json(updatedUser);
}