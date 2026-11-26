/**
 * Returns true if today is within the Christmas season window.
 * Season: any date up to and including 2 Jan 2027.
 * After that all festive effects are automatically hidden.
 */
export function isChristmasSeason() {
  const EXPIRY = new Date('2027-01-03T00:00:00'); // midnight after Jan 2
  return new Date() < EXPIRY;
}
