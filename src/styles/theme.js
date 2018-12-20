export const BREAKPOINTS = {
  phablet: '640px',
  tablet: '768px',
  desktop: '1024px'
};

/*
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 *   color: ${COLOURS.primary}40; // Use the primary color at 25% opacity
 */

export const COLOURS = {
  base: '#ffffff',
  primary: '#272b3b',
  accent: '#c6fdec'
};

// Spacing hierarchy taken from AirBnb's style "language"
export const SPACING = {
  base: '24px',
  tiny: '8px',
  small: '16px',
  large: '48px',
  huge: '64px'
};

export const WIDTHS = {
  siteMax: '1200px'
};

// Taken from: https://material.io/design/typography/the-type-system.html#
export const TYPE_SCALE = {
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  34: '34px',
  48: '48px',
  60: '60px'
};

export const FONT_FAMILIES = {
  sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
};

export const Z_INDEXES = {
  beneath: -1,
  base: 1,
  modal: 2,
  skipLink: 3
};
