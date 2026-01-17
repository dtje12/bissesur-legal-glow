/**
 * Client-side rate limiting utility
 * Tracks attempts in localStorage to prevent spam
 */

interface RateLimitConfig {
  key: string;
  maxAttempts: number;
  windowMs: number; // Time window in milliseconds
}

interface AttemptRecord {
  timestamps: number[];
}

const getStorageKey = (key: string): string => `rate_limit_${key}`;

const getAttempts = (key: string): number[] => {
  try {
    const stored = localStorage.getItem(getStorageKey(key));
    if (!stored) return [];
    const record: AttemptRecord = JSON.parse(stored);
    return record.timestamps || [];
  } catch {
    return [];
  }
};

const setAttempts = (key: string, timestamps: number[]): void => {
  try {
    const record: AttemptRecord = { timestamps };
    localStorage.setItem(getStorageKey(key), JSON.stringify(record));
  } catch {
    // localStorage might be full or disabled
  }
};

const cleanOldAttempts = (timestamps: number[], windowMs: number): number[] => {
  const now = Date.now();
  return timestamps.filter(ts => now - ts < windowMs);
};

export const checkRateLimit = (config: RateLimitConfig): { allowed: boolean; remainingTime: number; attemptsLeft: number } => {
  const { key, maxAttempts, windowMs } = config;
  
  const allAttempts = getAttempts(key);
  const validAttempts = cleanOldAttempts(allAttempts, windowMs);
  
  // Update storage with cleaned attempts
  setAttempts(key, validAttempts);
  
  if (validAttempts.length >= maxAttempts) {
    // Calculate remaining time until oldest attempt expires
    const oldestAttempt = Math.min(...validAttempts);
    const remainingTime = Math.max(0, windowMs - (Date.now() - oldestAttempt));
    return {
      allowed: false,
      remainingTime,
      attemptsLeft: 0
    };
  }
  
  return {
    allowed: true,
    remainingTime: 0,
    attemptsLeft: maxAttempts - validAttempts.length
  };
};

export const recordAttempt = (key: string, windowMs: number): void => {
  const allAttempts = getAttempts(key);
  const validAttempts = cleanOldAttempts(allAttempts, windowMs);
  validAttempts.push(Date.now());
  setAttempts(key, validAttempts);
};

export const formatRemainingTime = (ms: number): string => {
  const seconds = Math.ceil(ms / 1000);
  if (seconds < 60) return `${seconds} seconden`;
  const minutes = Math.ceil(seconds / 60);
  return `${minutes} ${minutes === 1 ? 'minuut' : 'minuten'}`;
};

// Pre-configured rate limiters
export const contactFormRateLimit = {
  key: 'contact_form',
  maxAttempts: 3, // Max 3 submissions
  windowMs: 15 * 60 * 1000 // Per 15 minutes
};

export const pageViewRateLimit = {
  key: 'page_views',
  maxAttempts: 100, // Max 100 page loads
  windowMs: 60 * 1000 // Per minute
};
