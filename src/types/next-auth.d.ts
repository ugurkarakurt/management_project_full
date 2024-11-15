// src/types/next-auth.d.ts
import 'next-auth';
import { Role } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      role: Role;  // Role tipini Prisma'dan alıyoruz
    }
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    role: Role;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
  }
}