/**
 * Returns true if today is within the Christmas season window.
 * Active until Jan 3rd 2027 (automatically reverts at 2027-01-03T00:00:00).
 */
export function isChristmasSeason() {
  const EXPIRY = new Date('2027-01-03T00:00:00');
  return new Date() < EXPIRY;
}

/**
 * Returns the seasonal Christmas logo until Jan 3rd 2027,
 * then automatically falls back to the standard Delli Bites logo.
 */
export function getBrandLogo() {
  return isChristmasSeason()
    ? '/assets/img/Logo-christmas.jpeg'
    : '/assets/delli_logo.png';
}
