// src/middleware.ts
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// Auth gerektirmeyen public sayfalar
const publicPages = ['/login', '/register', '/forgot-password', '/reset-password'];

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const isPublicPage = publicPages.some(page => pathname.startsWith(page));

    // Eğer public sayfa ise direkt geçiş ver
    if (isPublicPage) {
      return NextResponse.next();
    }

    // Auth olmayan kullanıcıyı login'e yönlendir
    if (!req.nextauth.token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        const isPublicPage = publicPages.some(page => pathname.startsWith(page));

        // Public sayfalar için her zaman true
        if (isPublicPage) return true;

        // Diğer sayfalar için token kontrolü
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    // Tüm sayfaları kontrol et, sadece belirli statik dosyaları hariç tut
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};