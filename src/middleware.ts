import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { JWT_SECRET } from '@/libs/jwtSecret';

/**
 * Maps a protected route prefix to the role required to access it.
 * Example: anyone visiting /admin/* must have role === 'admin'.
 */
const roleRoutes: Record<string, string> = {
  '/admin': 'admin',
  '/writer': 'writer',
  '/editor': 'editor',
  '/user': 'user',
};

/**
 * Maps each role to its own dashboard, used to redirect a user
 * who tries to access a route that doesn't match their role.
 */
const roleDashboards: Record<string, string> = {
  admin: '/admin/dashboard',
  writer: '/writer/dashboard',
  editor: '/editor/dashboard',
  user: '/user/dashboard',
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // No token at all -> not logged in, send to login page.
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    const role = verified.payload.role as string;

    // Check whether the requested route belongs to a role-protected area.
    for (const [route, requiredRole] of Object.entries(roleRoutes)) {
      if (pathname.startsWith(route) && role !== requiredRole) {
        // Role mismatch -> redirect to that role's own dashboard.
        const redirectPath = roleDashboards[role] ?? '/login';
        return NextResponse.redirect(new URL(redirectPath, request.url));
      }
    }

    return NextResponse.next();
  } catch {
    // Token is invalid or expired.
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/writer/:path*', '/editor/:path*', '/user/:path*'],
};
