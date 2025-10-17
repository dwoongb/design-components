import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Combines conditional class logic (clsx) with Tailwind conflict resolution (twMerge)
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-blue-500', { 'text-white': isLight })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
