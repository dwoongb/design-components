/**
 * Custom Tailwind CSS classes for design-components
 */

// Button color classes
export type ButtonColorClass =
  | 'bg-btn-primary'
  | 'bg-btn-primary-hover'
  | 'bg-btn-primary-active'
  | 'bg-btn-secondary'
  | 'bg-btn-secondary-hover'
  | 'bg-btn-secondary-active'
  | 'bg-btn-outline'
  | 'text-btn-outline'
  | 'border-btn-outline';

// Hover variants
export type ButtonColorHoverClass =
  | 'hover:bg-btn-primary'
  | 'hover:bg-btn-primary-hover'
  | 'hover:bg-btn-primary-active'
  | 'hover:bg-btn-secondary'
  | 'hover:bg-btn-secondary-hover'
  | 'hover:bg-btn-secondary-active'
  | 'hover:bg-btn-outline'
  | 'hover:text-white';

// Active variants
export type ButtonColorActiveClass =
  | 'active:bg-btn-primary-active'
  | 'active:bg-btn-secondary-active';

// All button classes combined
export type ButtonClass =
  | ButtonColorClass
  | ButtonColorHoverClass
  | ButtonColorActiveClass;

// Extend this as you add more components
export type DesignSystemClass = ButtonClass;
