/**
 * Simple in-memory rate limiter for login attempts.
 *
 * Designed for a single, long-running Node.js process (e.g. a
 * self-hosted server), where state can safely live in memory.
 * Not suitable for serverless/multi-instance deployments, since
 * each instance would have its own separate memory.
 */

const MAX_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes

interface AttemptRecord {
  failedCount: number;
  lockedUntil: number | null; // timestamp in ms
}

const attempts = new Map<string, AttemptRecord>();

interface RateLimitResult {
  allowed: boolean;
  message?: string;
}

/** Checks whether a login attempt for the given identifier is currently allowed. */
export function checkRateLimit(identifier: string): RateLimitResult {
  const record = attempts.get(identifier);

  if (!record) {
    return { allowed: true };
  }

  if (record.lockedUntil && record.lockedUntil > Date.now()) {
    const minutesLeft = Math.ceil((record.lockedUntil - Date.now()) / (60 * 1000));
    return {
      allowed: false,
      message: `به دلیل تلاش‌های ناموفق زیاد، حساب موقتاً قفل شده است. لطفاً ${minutesLeft} دقیقه دیگر تلاش کنید!`,
    };
  }

  return { allowed: true };
}

/** Records a failed login attempt and locks the identifier if threshold is reached. */
export function recordFailedAttempt(identifier: string): void {
  const record = attempts.get(identifier) ?? { failedCount: 0, lockedUntil: null };

  const newCount = record.failedCount + 1;
  const shouldLock = newCount >= MAX_ATTEMPTS;

  attempts.set(identifier, {
    failedCount: newCount,
    lockedUntil: shouldLock ? Date.now() + LOCK_DURATION_MS : null,
  });
}

/** Clears the failed-attempt record after a successful login. */
export function clearFailedAttempts(identifier: string): void {
  attempts.delete(identifier);
}
