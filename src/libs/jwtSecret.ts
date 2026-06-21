/**
 * Shared JWT secret used by both:
 * - src/libs/auth.ts (Node.js runtime — used in Server Actions)
 * - src/middleware.ts (Edge runtime — used for route protection)
 *
 * Kept in its own minimal file (no heavy dependencies like bcryptjs)
 * so it can safely run in the Edge Runtime as well.
 *
 * The app intentionally crashes on startup if JWT_SECRET is missing,
 * instead of silently falling back to an insecure default value.
 */

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required but not set');
}

export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
