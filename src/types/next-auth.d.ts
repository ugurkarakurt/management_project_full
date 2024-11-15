// src/types/next-auth.d.ts
import 'next-auth';
import { Role } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      role: Role;
    }
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    role: Role;
    image?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
    image?: string | null;
  }
}