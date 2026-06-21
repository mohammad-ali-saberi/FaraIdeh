import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import bcryptjs from 'bcryptjs';
import { JWT_SECRET } from './jwtSecret';

export interface JWTPayload {
  id: number;
  username: string;
  role: string;
  [key: string]: string | number;
}

// ---------------------------------------------------------------------------
// Password Hashing
// ---------------------------------------------------------------------------

/** Hash a plain-text password before storing it in the database. */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

/** Compare a plain-text password against a stored bcrypt hash. */
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcryptjs.compare(password, hashedPassword);
}

// ---------------------------------------------------------------------------
// JWT Tokens
// ---------------------------------------------------------------------------

/** Create a signed JWT for an authenticated user (valid for 7 days). */
export async function createToken(payload: JWTPayload): Promise<string> {
  return new SignJWT(payload as Record<string, string | number>)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
}

/** Verify a JWT and return its payload, or null if invalid/expired. */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    return {
      id: verified.payload.id as number,
      username: verified.payload.username as string,
      role: verified.payload.role as string,
    };
  } catch (err) {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Auth Cookie Management
// ---------------------------------------------------------------------------

/** Store the JWT in an httpOnly cookie after a successful login. */
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  });
}

/** Remove the auth cookie (used on logout). */
export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
}

/** Read the raw auth token from the cookie, if present. */
export async function getAuthCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get('auth_token')?.value;
}

// ---------------------------------------------------------------------------
// Current User Helper
// ---------------------------------------------------------------------------

/** Get the currently authenticated user from the request cookies, if any. */
export async function getAuthUser(): Promise<JWTPayload | null> {
  const token = await getAuthCookie();
  if (!token) return null;
  return verifyToken(token);
}
