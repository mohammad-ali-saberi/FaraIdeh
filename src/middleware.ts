import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
);

// Roll route
const roleRoutes: Record<string, string> = {
  '/admin': 'admin',
  '/writer': 'writer',
  '/editor': 'editor',
  '/user': 'user',
};

// Roll Dashboard route
const roleDashboards: Record<string, string> = {
  admin: '/admin/dashboard',
  writer: '/writer/dashboard',
  editor: '/editor/dashboard',
  user: '/user/dashboard',
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // If there is no token, send it to login.
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    const role = verified.payload.role as string;

    // Check which root the user is trying to access.
    for (const [route, requiredRole] of Object.entries(roleRoutes)) {
      if (pathname.startsWith(route) && role !== requiredRole) {
        // If the role doesn't match, send it to its own dashboard.
        const redirectPath = roleDashboards[role] ?? '/login';
        return NextResponse.redirect(new URL(redirectPath, request.url));
      }
    }

    return NextResponse.next();
  } catch {
    // token is not valid.
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/writer/:path*', '/editor/:path*', '/user/:path*'],
};
