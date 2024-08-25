import 'server-only';

import { cache } from 'react';
import { verifySession } from './session';
import { prisma } from '@/lib/util';

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {   
    const user =  prisma.user.findFirst({
      where: {
        id: session.userId
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
    return user;
  } catch (error) {
    return null;
  }
});